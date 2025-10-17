import React from "react";
import { prisma } from "../../api/index";

import Navbar from "../../components/navbar";
import UpdateWeaponForm from "../../components/client/updateWeaponForm";

import { getServerSession } from "next-auth"; // Get auth token as represented on server.

type SteamLibrary = {
  convertToText: (steamid: string) => string;
};

const steam: SteamLibrary = require("steamidconvert")(
  process.env.STEAM_SECRET!
);

const WeaponEditPage = async ({ params }: { params: { slug: string } }) => {
  const session = await getServerSession();

  if (!session) {
    return (
      <div>
        <Navbar />
        <p className="text-white font-mono bg-black opacity-75 h-screen mt-2">
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

  const { slug } = await params;
  const wepId = slug.replace("%7B", "{").replace("%7D", "}");
  const wepName = await prisma.weapon.findFirst({
    select: {
      weaponName: true,
    },
    where: {
      weaponId: wepId,
    },
  });

  const wepClassName = await prisma.weapon.findFirst({
    select: {
      weaponClass: true,
    },
    where: {
      weaponId: wepId,
    },
  });

  return (
    <div className="">
      <Navbar />
      <div className="text-white font-mono bg-black opacity-75 h-screen p-5 mt-2">
        <div className="">
          <p className="text-3xl font-mono font-bold">
            Editing Weapon: {wepId}
          </p>
          <p className="text-xl font-mono first-letter">
            Update the weapon's information below.
          </p>
        </div>
        <div className="">
          {wepName && wepClassName && (
            <UpdateWeaponForm
              wepId={wepId}
              weaponName={wepName.weaponName}
              weaponClass={wepClassName.weaponClass}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WeaponEditPage;
