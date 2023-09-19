import React from "react";
import { getServerSession } from "next-auth"; // Get auth token as represented on server.

import Navbar from "../../components/navbar";
import CreateServer from "../../components/view/createServer";
import Footer from "../../components/footer";

import { prisma } from "@/app/api";

type SteamLibrary = {
  convertToText: (steamid: string) => string;
};

const steam: SteamLibrary = require("steamidconvert")(
  process.env.STEAM_SECRET!
);

async function AddGameServersPage() {
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

  if (!isAdmin)
    return (
      <div className="overflow-hidden">
        <Navbar />
        <p className="flex text-3xl p-20 w-1/2 text-white font-mono">
          ERROR: User is not admin!
        </p>
        <Footer />
      </div>
    );

  return (
    <div className="overflow-hidden text-white">
      <Navbar />
      <div className="flex-row text-2xl w-screen flex flex-wrap items-center justify-between p-4 ">
        <div className="flex flex-col items-start w-screen">
          <p className="flex text-white font-mono mt-5">
            Add New Game Server Form:
          </p>
          <CreateServer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddGameServersPage;
