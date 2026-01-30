import { auth } from "@/lib/auth";

const N8N_URL = process.env.N8N_API_URL || "https://n8n-no1.missmanga.org";

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user as any;
  const hasN8n = !!user?.n8nUserId;

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-white mb-6">Dashboard</h1>

      {/* Welcome Box */}
      <div className="bg-gradient-to-r from-n2f-accent/10 to-n2f-accent/5 border border-n2f-accent/20 rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">
          Welcome, {user?.name}!
        </h2>
        <p className="text-sm text-n2f-text-secondary leading-relaxed">
          {hasN8n
            ? "ระบบสร้างบัญชี n8n ให้คุณเรียบร้อยแล้ว ตรวจสอบอีเมลสำหรับลิงก์ตั้งรหัสผ่าน"
            : "จัดการบัญชี ดูประวัติการสั่งซื้อ และดาวน์โหลดสินค้าที่ซื้อแล้วได้ที่นี่"}
        </p>
      </div>

      {/* n8n Account Info */}
      {hasN8n && (
        <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            n8n Account
          </h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-xs text-n2f-text-dim w-16 shrink-0 pt-0.5">URL</span>
              <a
                href={N8N_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-n2f-accent hover:underline break-all"
              >
                {N8N_URL}
              </a>
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

          <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <p className="text-sm text-amber-200 leading-relaxed">
              ตรวจสอบอีเมล <strong>{user?.email}</strong> สำหรับลิงก์เชิญจาก n8n
              คลิกลิงก์เพื่อตั้งรหัสผ่านและเข้าใช้งาน n8n ได้ทันที
            </p>
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

      {/* Info / Message Box */}
      <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-3">
          Node2Flow MCP Platform
        </h2>
        <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">
          Node2Flow ให้บริการ MCP Server สำหรับเชื่อมต่อ AI กับ n8n
          Workflow Automation คุณสามารถสั่ง AI สร้าง แก้ไข และจัดการ
          workflow ได้โดยตรงผ่าน MCP Protocol
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={N8N_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black transition-all duration-300"
          >
            เปิด n8n
          </a>
          <a
            href="/docs"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
