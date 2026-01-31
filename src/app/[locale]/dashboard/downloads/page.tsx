import { Download } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function DownloadsPage() {
  const t = useTranslations("dashboard");

  return (
    <div>
      <h1 className="text-2xl font-bold text-n2f-text mb-6">{t("downloads")}</h1>

      <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-8 text-center">
        <Download className="w-10 h-10 text-n2f-text-muted mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-n2f-text mb-2">{t("noDownloads")}</h2>
        <p className="text-sm text-n2f-text-muted mb-6">{t("noDownloadsDesc")}</p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
        >
          {t("goToShop")}
        </Link>
      </div>
    </div>
  );
}
