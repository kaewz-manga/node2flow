import { CreditCard } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-n2f-text mb-6">Subscription</h1>

      <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-8 text-center">
        <CreditCard className="w-10 h-10 text-n2f-text-muted mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-n2f-text mb-2">
          ยังไม่ได้สมัครแพ็คเกจ
        </h2>
        <p className="text-sm text-n2f-text-muted mb-6">
          สมัครแพ็คเกจ SaaS เพื่อเข้าถึง MCP Server
        </p>
        <a
          href="/services/saas"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
        >
          ดูแพ็คเกจ
        </a>
      </div>
    </div>
  );
}
