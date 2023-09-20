import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../index";

// List servers at GET endpoint /api/servers
export async function GET(req: Request) {
  return NextResponse.json({
    Items: {
      "{identifier}": {
        name: "name_value",
        inherits: "Upgradeable TF_WEAPON_FLAMETHROWER",
        attributes_game: {
          "mod flamethrower back crit": "1",
        },
      },
    },
  });
}

const insertServerSchema = z.object({
  serverIdentifier: z.string(),
  serverName: z.string(),
  serverIP: z.string(),
});

// Add or remove server at POST endpoint /api/servers
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { serverIdentifier, serverName, serverIP } =
    await insertServerSchema.parseAsync(body);

  try {
    const existing = await prisma.server.findFirst({
      where: {
        OR: [{ serverIdentifier }, { serverName }, { serverIp: serverIP }],
      },
    });

    if (existing)
      return NextResponse.json(
        { message: `A server @ ID: ${serverIdentifier} already exists!` },
        { status: 409 }
      );

    await prisma.server.upsert({
      where: {
        serverIdentifier: serverIdentifier,
      },
      update: {},
      create: {
        serverIdentifier: serverIdentifier,
        serverName: serverName,
        serverIp: serverIP,
      },
    });

    return NextResponse.json({
      message: `${serverIdentifier} added to database!`,
    });
  } catch (error: any) {
    return new Response(error);
  }
}
