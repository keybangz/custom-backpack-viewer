import Image from "next/image";
import Link from "next/link";
import { prisma } from "../api/index";

// Get server side session token to ensure no client spoofing.
import { getServerSession } from "next-auth"; // Get auth token as represented on server.

// Server-side components
import Login from "./login";
import ClassSelector from "./classSelector";
var steam = require("steamidconvert")(process.env.STEAM_SECRET!);

async function profile() {
  const session = await getServerSession();

  if (!session)
    // Display login page if client is not logged in.
    return (
      <div className="flex flex-col items-center">
        <Login />
      </div>
    );

  const { user } = session;
  const parse = user.email.replace("@steamcommunity.com", ""); // Remove email suffix
  const steamId = steam.convertToText(parse); // Convert to SteamID32 for gameserver

  const isAdmin = await prisma.user.findFirst({
    select: { role: true },
    where: {
      steamId,
      role: "ADMIN",
    },
  });

  return (
    <div className="flex flex-col mt-2 bg-black text-white opacity-75 h-screen text-3xl font-mono">
      <UserInfo />
      <ClassSelector />
      {isAdmin ? (
        <Link href="/gameservers" className="flex justify-evenly">
          <div className="mt-5 p-10 bg-[#34302d] hover:bg-[#6b6a65]">
            Admin Panel
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

export default profile;

async function UserInfo() {
  const session = await getServerSession();
  // User info, if not logged in
  if (!session) {
    return (
      <p className="text-white text-3xl p-5 font-mono font-bold">
        User not logged in!
      </p>
    );
  }

  const { user } = session;

  const email = user.email; // SteamID64 is stored in user email, we need it for later storing in MySQL DB
  const parse = email.replace("@steamcommunity.com", ""); // Remove email suffix
  const steamid = steam.convertToText(parse); // Convert to SteamID32 for gameserver

  await prisma.user.upsert({
    where: {
      steamId: steamid,
      steamId64: parse,
    },
    update: {},
    create: {
      steamId: steamid,
      name: user.name,
      steamId64: parse,
      role: "USER",
      avatar: user.image,
    },
  });

  const isAdmin = await prisma.user.findFirst({
    select: { role: true },
    where: {
      steamId: steamid,
      role: "ADMIN",
    },
  });

  // If logged in, display name and profile image
  return (
    <div className="flex flex-row items-center p-5">
      {user.image && (
        <Image
          className="float-left"
          src={user.image}
          width="140"
          height="140"
          alt="Profile Picture"
        />
      )}
      <div className="flex flex-col">
        <p className="text-white text-3xl pl-5 font-mono font-bold flex">
          {user?.name}
        </p>
        <p className="text-white text-2xl pl-5 font-mono font-bold flex float-none">
          {steamid}
        </p>
        <p className="text-white text-2xl pl-5 font-mono font-bold flex float-none">
          User Role: {isAdmin ? "ADMIN" : "USER"}
        </p>
      </div>
    </div>
  );
}
