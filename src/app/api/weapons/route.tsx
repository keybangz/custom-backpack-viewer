import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../index";
import { getServerSession } from "next-auth/next";
var steam = require("steamidconvert")(process.env.STEAM_SECRET!);

const insertWeaponScheme = z.object({
  weaponId: z.string(),
  weaponName: z.string(),
  weaponClass: z.string(),
});

// Add or remove server at POST endpoint /api/weapons
export async function POST(req: Request, res: Response) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json(
      { message: "User not logged in!" },
      { status: 401 }
    );
  }

  const body = await req.json();
  const { weaponId, weaponName, weaponClass } =
    await insertWeaponScheme.parseAsync(body);

  try {
    const existing = await prisma.weapon.findFirst({
      where: {
        OR: [{ weaponId }, { weaponName }],
      },
    });

    if (existing)
      return NextResponse.json(
        { message: `A weapon @ ${weaponId} already exists!` },
        { status: 409 }
      );

    const { user } = session;

    const email = user.email; // SteamID64 is stored in user email, we need it for later storing in MySQL DB
    const parse = email.replace("@steamcommunity.com", ""); // Remove email suffix
    const steamid = steam.convertToText(parse); // Convert to SteamID32 for gameserver

    await prisma.weapon.upsert({
      where: {
        weaponId: weaponId,
      },
      update: {},
      create: {
        weaponId: weaponId,
        weaponName: weaponName,
        weaponClass: weaponClass,
        weaponAttributes: {},
        userId: steamid,
      },
    });

    return NextResponse.json({
      message: `${weaponId} added to database!`,
    });
  } catch (error: any) {
    return new Response(error);
  }
}
