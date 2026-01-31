import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Node2Flow",
  description: "นโยบายความเป็นส่วนตัวของ Node2Flow",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl max-md:text-[28px] font-bold text-n2f-text mb-3">Privacy Policy</h1>
        <p className="text-sm text-n2f-text-dim mb-10">อัพเดทล่าสุด: มกราคม 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-bold text-n2f-text mb-3">1. ข้อมูลที่เราเก็บรวบรวม</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราเก็บรวบรวมข้อมูลเท่าที่จำเป็นสำหรับการให้บริการ ได้แก่:
              ชื่อ, อีเมล, รูปโปรไฟล์ (จาก Google OAuth),
              ข้อมูลการสั่งซื้อ, และข้อมูลการใช้งาน MCP Server
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-n2f-text mb-3">2. วิธีการใช้ข้อมูล</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราใช้ข้อมูลของคุณเพื่อ: ให้บริการ MCP Server,
              จัดการบัญชีผู้ใช้, ดำเนินการสั่งซื้อ,
              ส่งข้อมูลอัพเดทเกี่ยวกับบริการ, และปรับปรุงบริการของเรา
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-n2f-text mb-3">3. การรักษาความปลอดภัย</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสม รวมถึง:
              การเข้ารหัสข้อมูล (HTTPS), การจัดเก็บรหัสผ่านแบบเข้ารหัส,
              การใช้ Application Password แทนรหัสผ่านหลัก,
              และการจำกัดการเข้าถึงข้อมูล
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-n2f-text mb-3">4. การแบ่งปันข้อมูล</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราไม่ขาย ไม่แลกเปลี่ยน หรือไม่ให้เช่าข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม
              ยกเว้นกรณีที่จำเป็นสำหรับการให้บริการ (เช่น Stripe สำหรับการชำระเงิน)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-n2f-text mb-3">5. Cookie</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราใช้ Cookie เฉพาะที่จำเป็นสำหรับการทำงานของระบบ เช่น
              Session Cookie สำหรับการเข้าสู่ระบบ
              เราไม่ใช้ Cookie สำหรับการติดตามหรือโฆษณา
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-n2f-text mb-3">6. สิทธิ์ของคุณ</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              คุณมีสิทธิ์: ขอดูข้อมูลของคุณ, ขอแก้ไขข้อมูล,
              ขอลบบัญชีและข้อมูลทั้งหมด, และถอนความยินยอมได้ตลอดเวลา
              โดยติดต่อเราที่ node2flow@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-n2f-text mb-3">7. การเปลี่ยนแปลง</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว การเปลี่ยนแปลงจะประกาศบนหน้านี้
              การใช้บริการต่อหลังจากมีการเปลี่ยนแปลงถือว่าคุณยอมรับนโยบายใหม่
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-n2f-text mb-3">8. ติดต่อเรา</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว ติดต่อ:{" "}
              <a href="mailto:node2flow@gmail.com" className="text-n2f-accent hover:underline">
                node2flow@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
