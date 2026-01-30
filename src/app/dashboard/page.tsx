import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-white mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
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

      <div className="mt-8 bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Welcome, {session?.user?.name}!
        </h2>
        <p className="text-sm text-n2f-text-muted leading-relaxed">
          จัดการบัญชี ดูประวัติการสั่งซื้อ และดาวน์โหลดสินค้าที่ซื้อแล้วได้ที่นี่
        </p>
      </div>
    </div>
  );
}
