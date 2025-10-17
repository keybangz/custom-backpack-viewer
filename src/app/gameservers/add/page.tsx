import React from "react";
import { getServerSession } from "next-auth"; // Get auth token as represented on server.

import Navbar from "../../components/navbar";
import CreateServerForm from "../../components/client/createServerForm";

import { prisma } from "../../api/index";

type SteamLibrary = {
  convertToText: (steamid: string) => string;
};

const steam: SteamLibrary = require("steamidconvert")(
  process.env.STEAM_SECRET!
);

async function AddGameServersPage() {
  const session = await getServerSession();

  const server = await prisma.server.findMany({
    select: {
      serverIdentifier: true,
      serverName: true,
      serverIp: true,
    },
  });

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

  if (!isAdmin)
    return (
      <div className="overflow-hidden">
        <Navbar />
        <p className="flex text-3xl p-20 w-1/2 text-white font-mono">
          ERROR: User is not admin!
        </p>
      </div>
    );

  return (
    <div className="overflow-hidden text-white">
      <Navbar />
      <div className="bg-black text-white opacity-75 mt-2 h-screen">
        <div className="flex flex-col justify-center">
          <p className="text-3xl font-mono font-bold text-center mt-5 ">
            Gameserver Manager
          </p>

          <p className="text-xl font-mono first-letter mt-5 ml-5 text-center">
            Click on server entry to see server information.
          </p>

          <div className="p-5 m-5 items-center text-center flex flex-col justify-center">
            <p className="text-3xl font-mono font-bold">Add Server</p>
            <CreateServerForm />
          </div>

          <div className="flex flex-row justify-center">
            {server.map((srv: any) => {
              return (
                <div className="flex flex-col m-5 p-5 text-center bg-[#34302d] hover:bg-[#6b6a65]">
                  <div key={srv} className="text-2xl font-bold">
                    {srv.serverIdentifier}
                  </div>
                  <div className="text-xl">{srv.serverName}</div>
                  <div className="italic">{srv.serverIp}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGameServersPage;
