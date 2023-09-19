import Link from "next/link";
import Image from "next/image";

// Components related to client use
import Login from "../../components/login";

// Server-side components
import ClassSelector from "./classSelector";
import AdminPanel from "../../components/view/admin";

import { prisma } from "@/app/api";

// SteamID Convert Module
var steam = require("steamidconvert")(process.env.STEAM_SECRET!);

// Get server side session token to ensure no client spoofing.
import { getServerSession } from "next-auth"; // Get auth token as represented on server.

async function profile() {
  const session: any = await getServerSession();

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
    // Display user info and backpack if client is logged in.
    // TODO: ADD USER TYPE, GAMESERVER PANEL HERE ETC
    <div className="flex flex-col pt-5">
      <UserInfo />
      <ClassSelector />
      <div>{isAdmin ? <AdminPanel /> : <div />}</div>
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

  let email: string = user?.email; // SteamID64 is stored in user email, we need it for later storing in MySQL DB
  var parse: string = email.replace("@steamcommunity.com", ""); // Remove email suffix

  var steamid = steam.convertToText(parse); // Convert to SteamID32 for gameserver

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
    <div className="flex w-screen pl-5 flex-row items-center">
      {user?.image && (
        <Image
          className="float-left"
          src={user?.image}
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
