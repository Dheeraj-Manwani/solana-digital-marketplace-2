import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db";

import { Session } from "next-auth";

export interface session extends Session {
  user: {
    email: string;
    name: string;
    image: string;
    uid: string;
  };
}

export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET || "secr3t",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    session: ({
      session,
      token,
    }: {
      session: session;
      token: { uid: string };
    }): session => {
      const newSession: session = session as session;
      if (newSession.user && token.uid) {
        newSession.user.uid = token.uid ?? "";
      }
      return newSession!;
    },
    async jwt({
      token,
    }: //  account, profile
    {
      token: { email: string; uid: number; publicKey: string | null };
    }) {
      const user = await db.user.findFirst({
        where: {
          email: token?.email ?? "",
        },
      });
      if (user) {
        token.uid = user.id;
        token.publicKey = user.publicKey;
      }
      return token;
    },
    async signIn({
      user,
      account,
      profile,
    }: //  email, credentials
    {
      user: { email: string };
      account: { provider: string | null };
      profile: { name: string | null };
    }) {
      if (account?.provider === "google") {
        const email = user.email;
        if (!email) {
          return false;
        }

        const userDb = await db.user.findFirst({
          where: {
            email: email,
          },
        });

        if (userDb) {
          return true;
        }

        await db.user.create({
          data: {
            email: email,
            name: profile?.name,
          },
        });

        return true;
      }

      return false;
    },
  },
};
