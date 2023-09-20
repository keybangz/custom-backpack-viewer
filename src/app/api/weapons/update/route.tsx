import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../index";
import { getServerSession } from "next-auth/next";
var steam = require("steamidconvert")(process.env.STEAM_SECRET!);

const updateWeaponScheme = z.object({
  weaponId: z.string(),
  weaponName: z.string(),
  weaponClass: z.string(),
  attributeId: z.string(),
  attributeValue: z.string(),
});

export async function POST(req: Request, res: Response) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json(
      { message: "User not logged in!" },
      { status: 401 }
    );
  }

  const body = await req.json();
  const { weaponId, weaponName, weaponClass, attributeId, attributeValue } =
    await updateWeaponScheme.parseAsync(body);

  const { user } = session;

  try {
    await prisma.weapon.upsert({
      where: {
        weaponId: weaponId,
      },
      update: {
        weaponId: weaponId,
        weaponName: weaponName,
        weaponClass: weaponClass,
        user: {
          connect: {
            steamId: steam.convertToText(
              user.email.replace("@steamcommunity.com", "")
            ),
          },
        },
      },
      create: {
        weaponId: weaponId,
        weaponName: weaponName,
        weaponClass: weaponClass,
        user: {
          connect: {
            steamId: steam.convertToText(
              user.email.replace("@steamcommunity.com", "")
            ),
          },
        },
      },
    });

    await prisma.weaponAttributes.upsert({
      where: {
        weaponId: weaponId,
      },
      update: {
        weaponId: weaponId,
        attributeId: attributeId ? attributeId : "None",
        attributeValue: attributeValue ? attributeValue : "None",
      },
      create: {
        weaponId: weaponId,
        attributeId: attributeId ? attributeId : "None",
        attributeValue: attributeValue ? attributeValue : "None",
      },
    });

    return NextResponse.json({
      message: `${weaponId} updated on database!`,
    });
  } catch (error: any) {
    return new Response(error);
  }
}
