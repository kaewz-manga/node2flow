export default function SubscriptionPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-white mb-6">Subscription</h1>

      <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-8 text-center">
        <p className="text-4xl mb-4">💳</p>
        <h2 className="text-lg font-semibold text-white mb-2">
          ยังไม่ได้สมัครแพ็คเกจ
        </h2>
        <p className="text-sm text-n2f-text-muted mb-6">
          สมัครแพ็คเกจ SaaS เพื่อเข้าถึง MCP Server
        </p>
        <a
          href="/services/saas"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] transition-all duration-300"
        >
          ดูแพ็คเกจ
        </a>
      </div>
    </div>
  );
}
