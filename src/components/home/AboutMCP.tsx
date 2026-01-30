export default function AboutMCP() {
  const examples = [
    '"ดึงยอดขายจาก Google Sheet แล้วสร้างรายงานสรุปลง Notion พร้อมส่งแจ้งเตือนทีมผ่าน LINE"',
    '"รวบรวมฟีดแบ็กลูกค้าจาก Gmail วิเคราะห์ sentiment แล้วอัพเดทลง CRM อัตโนมัติ"',
    '"สร้าง invoice จาก WooCommerce แปลงเป็น PDF แล้วส่งให้ลูกค้าผ่าน Telegram"',
  ];

  return (
    <section className="relative overflow-hidden py-20 max-md:py-12 bg-n2f" id="about">
      {/* MCP watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-extrabold text-center mb-4 text-white">
          MCP คืออะไร?
        </h2>
        <p className="text-center text-n2f-text-secondary text-base leading-[1.8] mb-6">
          Model Context Protocol (MCP) คือมาตรฐานสากลที่เปิดให้ AI ทุกตัว
          สั่งงานบริการภายนอกได้โดยตรง &mdash; จัดการข้อมูล สร้างเอกสาร
          ส่งข้อความ วิเคราะห์ไฟล์ และ automate workflow ได้ในคำสั่งเดียว
          โดยไม่ต้องเขียนโค้ดแม้แต่บรรทัดเดียว
        </p>

        {/* Example Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6 mt-8 hover:border-n2f-accent hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1.5 transition-all duration-300 group">
          {/* Shine sweep */}
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-n2f-accent/[0.06] to-transparent transition-[left] duration-600 pointer-events-none group-hover:left-full" />

          <span className="inline-block text-base font-extrabold text-n2f-accent mb-4 tracking-[1px]">
            สั่ง AI ครั้งเดียว ทำได้ทุกอย่าง
          </span>
          <div className="space-y-2">
            {examples.map((example, i) => (
              <p
                key={i}
                className="text-n2f-text-secondary text-base leading-8 pl-4 border-l-2 border-n2f-border"
              >
                {example}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
