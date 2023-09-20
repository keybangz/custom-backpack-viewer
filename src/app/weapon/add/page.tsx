import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar";
import CreateWeaponForm from "../../components/client/createWeaponForm";
import { getServerSession } from "next-auth"; // Get auth token as represented on server.
import prisma from "../../api/index";

var steam = require("steamidconvert")(process.env.STEAM_SECRET!);

async function AddWeaponPage() {
  const session = await getServerSession();

  const weapon = await prisma.weapon.findMany({
    select: {
      weaponId: true,
      weaponName: true,
      weaponClass: true,
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
    <div className="">
      <Navbar />
      <div className="bg-black text-white opacity-75 mt-2 h-screen">
        <div className="flex flex-col ">
          <p className="text-3xl font-mono font-bold text-center mt-5 ">
            Custom Weapon Manager
          </p>
          <p className="text-xl font-mono first-letter mt-5 ml-5 ">
            Click on weapon entry to see custom weapon info.
          </p>
          <div className="flex justify-between">
            <div className="p-5 flex flex-wrap">
              <div>
                <p className="text-3xl font-mono font-bold">List Weapons</p>
                <p className="text-lg font-mono italic mb-5">
                  Syntax: (weaponId) - (weaponName) - (weaponClassName)
                </p>
                {weapon.map((wep: any) => {
                  var wepLink = "/weapon/" + wep.weaponId;
                  return (
                    <div
                      key={wep}
                      className="m-5 p-5 text-center bg-[#34302d] hover:bg-[#6b6a65]"
                    >
                      <Link href={wepLink}>
                        <div className="text-2xl font-bold">{wep.weaponId}</div>
                        <div className="text-xl">{wep.weaponName}</div>
                        <div className="italic">{wep.weaponClass}</div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-5 items-center text-center">
              <p className="text-3xl font-mono font-bold">Add Weapon</p>
              <CreateWeaponForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWeaponPage;
