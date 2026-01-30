import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 max-md:py-12 text-center bg-[radial-gradient(ellipse_at_center,var(--color-n2f-accent-subtle),transparent_60%),linear-gradient(180deg,var(--color-n2f-elevated),var(--color-n2f))]" id="cta">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-extrabold mb-4 text-white">
          พร้อมเริ่มต้นหรือยัง?
        </h2>
        <p className="text-n2f-text-muted mb-9">เริ่มต้นฟรี ไม่มีค่าใช้จ่าย</p>
        <div className="flex justify-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </section>
  );
}
