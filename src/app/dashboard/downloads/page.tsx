import { Download } from "lucide-react";

export default function DownloadsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-n2f-text mb-6">Downloads</h1>

      <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-8 text-center">
        <Download className="w-10 h-10 text-n2f-text-muted mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-n2f-text mb-2">
          ยังไม่มีไฟล์ดาวน์โหลด
        </h2>
        <p className="text-sm text-n2f-text-muted mb-6">
          ซื้อสินค้าจาก Shop แล้วกลับมาดาวน์โหลดที่นี่
        </p>
        <a
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
        >
          ไปที่ Shop
        </a>
      </div>
    </div>
  );
}
