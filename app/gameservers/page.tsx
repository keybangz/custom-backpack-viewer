import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { getServerSession } from "next-auth"; // Get auth token as represented on server.

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

var steam = require("steamidconvert")(process.env.STEAM_SECRET!);

async function GameserversPage() {
  const session: any = await getServerSession();

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

  let email: string = user?.email; // SteamID64 is stored in user email, we need it for later storing in MySQL DB
  var parse: string = email.replace("@steamcommunity.com", ""); // Remove email suffix

  var steamid = steam.convertToText(parse); // Convert to SteamID32 for gameserver

  const userRole = await prisma.user.findUnique({
    where: {
      steamId: steamid,
    },
    select: {
      role: true,
    },
  });

  var showUserRole;
  var isAdmin = false;
  for (const [key, value] of Object.entries(userRole as Object)) {
    showUserRole = value;
    break;
  }

  if (showUserRole === "USER") isAdmin = false;
  else if (showUserRole === "ADMIN") isAdmin = true;

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

  return (
    <div className="overflow-hidden">
      <Navbar />
      <p className="flex text-3xl p-20 w-1/2 text-white font-mono">
        Gameservers
      </p>
      <Footer />
    </div>
  );
}

export default GameserversPage;
