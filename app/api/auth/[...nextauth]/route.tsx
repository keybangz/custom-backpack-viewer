import { NextRequest } from "next/server";

import NextAuth from "next-auth";
import SteamProvider from "next-auth-steam";

import { PROVIDER_ID } from 'next-auth-steam'

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
    callbacks: {
      jwt({ token, account, profile }) {
        if (account?.provider === PROVIDER_ID) {
          token.steam = profile
        }
  
        return token
      },
      async session({ session, token }) {
        if ('steam' in token) {
          // @ts-expect-error
          session.user.steam = token.steam
        }

        // session.user.role = token.role as string

        return session
      }
    },
  });
}

export { handler as GET, handler as POST };
