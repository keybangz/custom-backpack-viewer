import NextAuth from "next-auth";

declare module "next-auth" {
  interface Request {}
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** User string stored and grabbed from database. **/
      name: string;
      image: string;
      role: string;
      email: string;
    };
  }
}
