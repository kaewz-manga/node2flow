import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  users,
  accounts,
  sessions,
  verificationTokens,
  notifications,
} from "./schema";
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
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        const dbUser = db
          .select({
            role: users.role,
            n8nUserId: users.n8nUserId,
            n8nInviteUrl: users.n8nInviteUrl,
          })
          .from(users)
          .where(eq(users.id, user.id))
          .get();
        (session.user as any).role = dbUser?.role || "user";
        (session.user as any).n8nUserId = dbUser?.n8nUserId || null;
        (session.user as any).n8nInviteUrl = dbUser?.n8nInviteUrl || null;
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

      // Create n8n user account
      if (user.email) {
        const n8nUser = await createN8nUser(user.email);
        if (n8nUser?.id) {
          db.update(users)
            .set({
              n8nUserId: n8nUser.id,
              n8nInviteUrl: n8nUser.inviteAcceptUrl || null,
            })
            .where(eq(users.id, user.id!))
            .run();

          // If n8n didn't send the email and we have an invite URL, send it ourselves
          if (!n8nUser.emailSent && n8nUser.inviteAcceptUrl) {
            await sendN8nInviteEmail(
              user.email,
              n8nUser.inviteAcceptUrl,
              user.name || undefined,
            );
          }

          // Create n8n notification
          const emailNote = n8nUser.emailSent
            ? `n8n ส่งอีเมลเชิญไปที่ ${user.email} แล้ว กรุณาตรวจสอบอีเมลเพื่อตั้งรหัสผ่าน`
            : n8nUser.inviteAcceptUrl
              ? `ตรวจสอบอีเมล ${user.email} สำหรับลิงก์ตั้งรหัสผ่าน`
              : `บัญชี n8n พร้อมใช้งานแล้ว`;
          db.insert(notifications)
            .values({
              userId: user.id!,
              title: "n8n Account Created",
              message: `ระบบสร้างบัญชี n8n ให้คุณเรียบร้อยแล้ว ${emailNote}`,
              type: "success",
            })
            .run();
        }
      }

      // Welcome notification
      db.insert(notifications)
        .values({
          userId: user.id!,
          title: "Welcome to Node2Flow!",
          message: `ยินดีต้อนรับสู่ Node2Flow MCP Platform คุณสามารถใช้งาน MCP Server เพื่อเชื่อมต่อ AI กับ n8n Workflow Automation`,
          type: "info",
        })
        .run();
    },
  },
});
