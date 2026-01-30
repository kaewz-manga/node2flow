import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import { db } from "./db";
import { users, accounts, sessions, verificationTokens } from "./schema";
import { createN8nUser } from "./n8n";
import { sendN8nInviteEmail } from "./mail";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "node2flow@gmail.com";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // Read role from DB user record
        const dbUser = db
          .select({ role: users.role, n8nUserId: users.n8nUserId })
          .from(users)
          .where(eq(users.id, user.id))
          .get();
        (session.user as any).role = dbUser?.role || "user";
        (session.user as any).n8nUserId = dbUser?.n8nUserId || null;
      }
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      // Set admin role for admin email
      if (user.email === ADMIN_EMAIL) {
        db.update(users)
          .set({ role: "admin" })
          .where(eq(users.id, user.id!))
          .run();
      }

      // Create n8n user account + send invite email
      if (user.email) {
        const n8nUser = await createN8nUser(user.email);
        if (n8nUser?.id) {
          db.update(users)
            .set({ n8nUserId: n8nUser.id })
            .where(eq(users.id, user.id!))
            .run();

          // Send invite email with password setup link
          if (n8nUser.inviteAcceptUrl) {
            await sendN8nInviteEmail(
              user.email,
              n8nUser.inviteAcceptUrl,
              user.name || undefined,
            );
          }
        }
      }
    },
  },
});
