import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

import { getServerSession } from "next-auth"; // Get auth token as represented on server.
import { prisma } from "../api/index";

var steam = require("steamidconvert")(process.env.STEAM_SECRET!);

async function GameserversPage() {
  const session = await getServerSession();

  if (!session) {
    return (
      <div className="overflow-hidden">
        <Navbar />
        <p className="flex text-3xl p-20 w-1/2 text-white font-mono">
          ERROR: User not logged into webpanel!
        </p>
      </div>
    );
  }

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

  if (!isAdmin) {
    return (
      <div className="overflow-hidden">
        <Navbar />
        <p className="flex text-3xl p-20 w-1/2 text-white font-mono">
          ERROR: User is not admin!
        </p>
      </div>
    );
  }

  return (
    <div className="text-white font-mono">
      <Navbar />
      <div className="bg-black h-screen opacity-75 mt-2">
        <div className="flex flex-row text-2xl p-2">
          <Link
            href="/gameservers/add"
            className="p-5 bg-[#34302d] hover:bg-[#6b6a65] mr-2"
          >
            Gameserver Manager
          </Link>
          <Link
            href="/weapon/add"
            className="p-5 bg-[#34302d] hover:bg-[#6b6a65] mr-2"
          >
            Custom Weapon Manager
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameserversPage;
