import { auth } from "@/lib/auth";
import Inbox from "@/components/dashboard/Inbox";

const N8N_URL = process.env.N8N_API_URL || "https://n8n-no1.missmanga.org";

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user as any;
  const hasN8n = !!user?.n8nUserId;
  const inviteUrl = user?.n8nInviteUrl;

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-white mb-6">Dashboard</h1>

      {/* n8n Account Info */}
      {hasN8n && (
        <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            n8n Account Created
          </h2>
          <p className="text-sm text-n2f-text-secondary leading-relaxed mb-4">
            ระบบสร้างบัญชี n8n ให้คุณเรียบร้อยแล้ว
            {inviteUrl
              ? " กดปุ่มด้านล่างเพื่อตั้งรหัสผ่านและเริ่มใช้งาน"
              : " ตรวจสอบอีเมลสำหรับลิงก์ตั้งรหัสผ่าน"}
          </p>

          <div className="bg-white/5 rounded-xl p-4 mb-4 space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-xs text-n2f-text-dim w-16 shrink-0 pt-0.5">URL</span>
              <span className="text-sm text-n2f-text-secondary break-all">{N8N_URL}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xs text-n2f-text-dim w-16 shrink-0 pt-0.5">Email</span>
              <span className="text-sm text-n2f-text-secondary">{user?.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xs text-n2f-text-dim w-16 shrink-0 pt-0.5">Role</span>
              <span className="text-sm text-n2f-text-secondary">Member</span>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            {inviteUrl ? (
              <a
                href={inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black transition-all duration-300"
              >
                ตั้งรหัสผ่าน n8n
              </a>
            ) : (
              <a
                href={N8N_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black transition-all duration-300"
              >
                เปิด n8n
              </a>
            )}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 mb-6">
        <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6">
          <p className="text-sm text-n2f-text-muted mb-1">Orders</p>
          <p className="text-3xl font-extrabold text-white">0</p>
        </div>
        <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6">
          <p className="text-sm text-n2f-text-muted mb-1">Downloads</p>
          <p className="text-3xl font-extrabold text-white">0</p>
        </div>
        <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6">
          <p className="text-sm text-n2f-text-muted mb-1">Subscription</p>
          <p className="text-3xl font-extrabold text-n2f-text-muted">None</p>
        </div>
      </div>

      {/* Inbox */}
      <div className="mb-6">
        <Inbox />
      </div>

      {/* Platform Info */}
      <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-3">
          Node2Flow MCP Platform
        </h2>
        <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">
          Node2Flow ให้บริการ MCP Server สำหรับเชื่อมต่อ AI กับ n8n
          Workflow Automation คุณสามารถสั่ง AI สร้าง แก้ไข และจัดการ
          workflow ได้โดยตรงผ่าน MCP Protocol
        </p>
        <a
          href="/docs"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300"
        >
          Documentation
        </a>
      </div>
    </div>
  );
}
