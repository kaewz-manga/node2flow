import { auth } from "@/lib/auth";
import Inbox from "@/components/dashboard/Inbox";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const N8N_URL = process.env.N8N_API_URL || "https://n8n-no1.missmanga.org";

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user as any;
  const hasN8n = !!user?.n8nUserId;
  const inviteUrl = user?.n8nInviteUrl;
  const t = await getTranslations("dashboard");

  return (
    <div>
      <h1 className="text-2xl font-bold text-n2f-text mb-6">{t("title")}</h1>

      {/* n8n Account Info */}
      {hasN8n && (
        <div className="bg-green-500/[0.06] border border-green-500/15 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-n2f-text mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {t("n8nCreated")}
          </h2>
          <p className="text-sm text-n2f-text-secondary leading-relaxed mb-4">
            {t("n8nDesc")}
            {inviteUrl ? ` ${t("n8nSetPassword")}` : ` ${t("n8nCheckEmail")}`}
          </p>

          <div className="bg-n2f-secondary/50 rounded-lg p-4 mb-4 space-y-2">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
              >
                {t("setPassword")}
              </a>
            ) : (
              <a
                href={N8N_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
              >
                {t("openN8n")}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1 mb-6">
        <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-5">
          <p className="text-sm text-n2f-text-muted mb-1">{t("orders")}</p>
          <p className="text-3xl font-bold text-n2f-text">0</p>
        </div>
        <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-5">
          <p className="text-sm text-n2f-text-muted mb-1">{t("downloads")}</p>
          <p className="text-3xl font-bold text-n2f-text">0</p>
        </div>
        <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-5">
          <p className="text-sm text-n2f-text-muted mb-1">{t("subscription")}</p>
          <p className="text-3xl font-bold text-n2f-text-muted">{t("none")}</p>
        </div>
      </div>

      {/* Inbox */}
      <div className="mb-6">
        <Inbox />
      </div>

      {/* Platform Info */}
      <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-6">
        <h2 className="text-lg font-semibold text-n2f-text mb-3">{t("platformTitle")}</h2>
        <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">{t("platformDesc")}</p>
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200"
        >
          {t("documentation")}
        </Link>
      </div>
    </div>
  );
}
