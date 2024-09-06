import { authConfig } from "@/app/lib/auth";
import NextAuth from "next-auth";

// @ts-expect-error aaaaaaaaaaaaaaaaaaa
// aaaaaaaaaaaaaaaa
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
