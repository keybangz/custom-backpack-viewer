import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

import { getServerSession } from "next-auth"; // Get auth token as represented on server.

import { prisma } from "@/app/api";

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
        <Footer />
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
        <Footer />
      </div>
    );
  }

  const servers = await prisma.servers.findMany({
    select: {
      serverIdentifier: true,
      serverName: true,
      serverIp: true,
    },
  });

  function DrawServers() {
    return (
      <div className="">
        {servers.map((server: any) => {
          return (
            <button key={server} className="font-mono flex flex-row text-white">
              <p className="p-2 pr-10">{server.serverIdentifier}</p>
              <p className="p-2 pr-10">{server.serverName}</p>
              <p className="p-2 pr-10">{server.serverIp}</p>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="overflow-hidden text-white">
      <Navbar />
      <div className="flex-row text-2xl w-screen flex flex-wrap items-center justify-between p-4 ">
        <div className="flex flex-col items-start w-screen">
          <Link
            href="/gameservers/add"
            className="flex p-2 bg-[#3E3E3E] hover:bg-[#9A9280] font-mono"
          >
            Add Gameserver
          </Link>
          <p className="flex text-white font-mono mt-5">Gameservers:</p>
          <div className="flex flex-col bg-[#3E3E3E] hover:bg-[#9A9280] p-5 w-1/2">
            <DrawServers />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GameserversPage;
