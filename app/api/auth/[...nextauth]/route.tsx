import { NextRequest } from "next/server";

import NextAuth from "next-auth";
import SteamProvider from "next-auth-steam";

async function handler(
  req: NextRequest,
  ctx: {
    params: {
      nextauth: string[];
    };
  }
) {
  // @ts-ignore
  return NextAuth(req, ctx, {
    providers: [
      SteamProvider(req, {
        clientSecret: process.env.STEAM_SECRET!,
        callbackUrl: "http://localhost:3000/api/auth/callback",
      }),
    ],
  });
}

export { handler as GET, handler as POST };
