import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendN8nInviteEmail(
  to: string,
  inviteUrl: string,
  userName?: string,
) {
  const name = userName || to.split("@")[0];

  try {
    await transporter.sendMail({
      from: `"Node2Flow" <${process.env.GMAIL_USER}>`,
      to,
      subject: "Node2Flow - n8n Account Created",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e0e0e0; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #00d4aa, #00b894); padding: 32px; text-align: center;">
            <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: 800;">Node2Flow</h1>
            <p style="margin: 8px 0 0; color: rgba(0,0,0,0.7); font-size: 14px;">MCP Server Platform</p>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #fff; margin: 0 0 16px;">สวัสดี ${name}!</h2>
            <p style="color: #b0b0b0; line-height: 1.8; margin: 0 0 24px;">
              ระบบสร้างบัญชี n8n ให้คุณเรียบร้อยแล้ว คลิกปุ่มด้านล่างเพื่อตั้งรหัสผ่านและเริ่มใช้งาน n8n Workflow Automation
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="${inviteUrl}" style="display: inline-block; background: linear-gradient(135deg, #00d4aa, #00b894); color: #000; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">
                ตั้งรหัสผ่าน n8n
              </a>
            </div>
            <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 16px; margin: 24px 0;">
              <p style="color: #888; font-size: 13px; margin: 0 0 8px;"><strong style="color: #b0b0b0;">n8n URL:</strong> ${process.env.N8N_API_URL}</p>
              <p style="color: #888; font-size: 13px; margin: 0 0 8px;"><strong style="color: #b0b0b0;">Email:</strong> ${to}</p>
              <p style="color: #888; font-size: 13px; margin: 0;"><strong style="color: #b0b0b0;">Role:</strong> Member</p>
            </div>
            <p style="color: #666; font-size: 12px; margin: 24px 0 0; line-height: 1.6;">
              หากคุณไม่ได้สมัคร Node2Flow กรุณาเพิกเฉยอีเมลนี้<br/>
              ลิงก์นี้จะหมดอายุภายใน 48 ชั่วโมง
            </p>
          </div>
        </div>
      `,
    });
    console.log(`[mail] Invite email sent to ${to}`);
    return true;
  } catch (err) {
    console.error("[mail] Failed to send invite email:", err);
    return false;
  }
}
