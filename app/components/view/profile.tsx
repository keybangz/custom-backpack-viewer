import Link from "next/link";
import Image from "next/image";

// Components related to client use
import Login from "../../components/login";

// Server-side components
import Backpack from "../../components/view/backpack";
import AdminPanel from "../../components/view/admin";

// SteamID Convert Module
var steam = require("steamidconvert")(process.env.STEAM_SECRET!);

// Get server side session token to ensure no client spoofing.
import { getServerSession } from "next-auth"; // Get auth token as represented on server.

async function profile() {
  const session = await getServerSession();

  if (!session)
    // Display login page if client is not logged in.
    return (
      <div className="flex flex-col items-center">
        <Login />
      </div>
    );

  return (
    // Display user info and backpack if client is logged in.
    // TODO: ADD USER TYPE, GAMESERVER PANEL HERE ETC
    <div className="flex flex-col pt-5">
      <UserInfo />
      <Backpack />
      <AdminPanel />
    </div>
  );
}

export default profile;

async function UserInfo() {
  const session: any = await getServerSession();
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
          User Role: PLACEHOLDER
        </p>
      </div>
    </div>
  );
}
