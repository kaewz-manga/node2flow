const Database = require("better-sqlite3");
const db = new Database("database.db");
db.pragma("journal_mode = WAL");

console.log("Seeding database...\n");

// --- Clear existing data ---
db.exec("DELETE FROM products");
db.exec("DELETE FROM service_plans");
db.exec("DELETE FROM faq_items");
db.exec("DELETE FROM blog_posts");

// --- Products ---
const insertProduct = db.prepare(`
  INSERT INTO products (name, slug, description, type, price, original_price, download_url, tags, is_free)
  VALUES (@name, @slug, @description, @type, @price, @originalPrice, @downloadUrl, @tags, @isFree)
`);

const products = [
  {
    name: "MCP Quick Start Guide",
    slug: "mcp-quick-start-guide",
    description: "คู่มือเริ่มต้นใช้งาน MCP Server ตั้งแต่สมัครจนเชื่อมต่อ AI Client สำเร็จ",
    type: "pdf",
    price: 0,
    originalPrice: null,
    downloadUrl: null,
    tags: JSON.stringify(["MCP", "Beginner", "Thai"]),
    isFree: 1,
  },
  {
    name: "n8n MCP Cheat Sheet",
    slug: "n8n-mcp-cheat-sheet",
    description: "สรุปคำสั่ง MCP Tools ทั้ง 20 ตัว พร้อมตัวอย่างการใช้งานในหน้าเดียว",
    type: "pdf",
    price: 0,
    originalPrice: null,
    downloadUrl: null,
    tags: JSON.stringify(["n8n", "MCP Tools", "Reference"]),
    isFree: 1,
  },
  {
    name: "10 Starter Workflow Templates",
    slug: "10-starter-workflow-templates",
    description: "Workflow สำเร็จรูป 10 ตัว import เข้า n8n ใช้งานได้ทันที ครอบคลุม use case พื้นฐาน",
    type: "json",
    price: 0,
    originalPrice: null,
    downloadUrl: null,
    tags: JSON.stringify(["n8n", "Workflow", "JSON"]),
    isFree: 1,
  },
  {
    name: "Complete MCP Developer Guide",
    slug: "complete-mcp-developer-guide",
    description: "คู่มือสร้าง MCP Server ตั้งแต่เริ่มต้น ครอบคลุม Architecture, Transport Modes, Security และ Deployment",
    type: "pdf",
    price: 299,
    originalPrice: null,
    downloadUrl: null,
    tags: JSON.stringify(["MCP", "Advanced", "80+ pages"]),
    isFree: 0,
  },
  {
    name: "50 n8n MCP Workflows Pack",
    slug: "50-n8n-mcp-workflows-pack",
    description: "Workflow สำเร็จรูป 50 ตัว ครอบคลุม LINE, Notion, Google Sheets, WooCommerce, AI Agent และอื่นๆ",
    type: "bundle",
    price: 499,
    originalPrice: null,
    downloadUrl: null,
    tags: JSON.stringify(["n8n", "50 Workflows", "JSON"]),
    isFree: 0,
  },
  {
    name: "n8n Integration Guide",
    slug: "n8n-integration-guide",
    description: "คู่มือเชื่อมต่อ n8n กับ 15+ services พร้อม workflow templates และ best practices",
    type: "pdf",
    price: 199,
    originalPrice: null,
    downloadUrl: null,
    tags: JSON.stringify(["n8n", "Integration", "60+ pages"]),
    isFree: 0,
  },
];

for (const p of products) {
  insertProduct.run(p);
}
console.log(`Inserted ${products.length} products`);

// --- Service Plans ---
const insertPlan = db.prepare(`
  INSERT INTO service_plans (name, price, period, features, is_popular, stripe_price_id, sort_order)
  VALUES (@name, @price, @period, @features, @isPopular, @stripePriceId, @sortOrder)
`);

const plans = [
  {
    name: "Starter",
    price: 0,
    period: "month",
    features: JSON.stringify(["100 requests/วัน", "1 API Key", "7 Knowledge Tools", "Community Support"]),
    isPopular: 0,
    stripePriceId: null,
    sortOrder: 1,
  },
  {
    name: "Pro",
    price: 490,
    period: "month",
    features: JSON.stringify(["Unlimited requests", "3 API Keys", "20 Tools ครบ", "Connect n8n instance", "Priority Support"]),
    isPopular: 1,
    stripePriceId: null,
    sortOrder: 2,
  },
  {
    name: "Team",
    price: 1490,
    period: "month",
    features: JSON.stringify(["Unlimited requests", "10 API Keys", "20 Tools ครบ", "Multiple n8n instances", "Usage Dashboard", "Dedicated Support"]),
    isPopular: 0,
    stripePriceId: null,
    sortOrder: 3,
  },
];

for (const p of plans) {
  insertPlan.run(p);
}
console.log(`Inserted ${plans.length} service plans`);

// --- FAQ ---
const insertFaq = db.prepare(`
  INSERT INTO faq_items (question, answer, category, sort_order)
  VALUES (@question, @answer, @category, @sortOrder)
`);

const faqs = [
  {
    question: "MCP ต่างจาก API ยังไง?",
    answer: "MCP เป็นมาตรฐานที่ออกแบบมาให้ AI เข้าใจและใช้งานได้โดยตรง ไม่ต้องเขียนโค้ดเชื่อมต่อเอง ต่างจาก API ที่ต้อง integrate ทีละตัว",
    category: "general",
    sortOrder: 1,
  },
  {
    question: "ใช้งานยากไหม?",
    answer: "ง่ายมาก! แค่สมัคร รับ URL แล้วนำไปใส่ใน Claude ได้เลย ไม่ต้องมีความรู้ด้านเทคนิค",
    category: "general",
    sortOrder: 2,
  },
  {
    question: "มีค่าใช้จ่ายเท่าไหร่?",
    answer: "เริ่มต้นใช้งานฟรี! มีแพ็คเกจ Pro สำหรับผู้ที่ต้องการใช้งานมากขึ้น",
    category: "pricing",
    sortOrder: 3,
  },
  {
    question: "รองรับ AI Client ตัวไหนบ้าง?",
    answer: "รองรับ Claude Desktop, Cursor, Windsurf, n8n และ AI Client อื่นๆ ที่รองรับ MCP Protocol ทั้ง SSE และ Streamable HTTP transport",
    category: "technical",
    sortOrder: 4,
  },
  {
    question: "MCP Server มีกี่ tools?",
    answer: "มี 20+ tools ครอบคลุมการจัดการ n8n workflow ทั้งหมด ตั้งแต่สร้าง แก้ไข ลบ จนถึง validate และ deploy workflow",
    category: "technical",
    sortOrder: 5,
  },
  {
    question: "ข้อมูลปลอดภัยไหม?",
    answer: "ปลอดภัย! การเชื่อมต่อผ่าน HTTPS ทั้งหมด API Key เข้ารหัสและเก็บอย่างปลอดภัย ไม่เก็บข้อมูล workflow ของคุณ",
    category: "security",
    sortOrder: 6,
  },
];

for (const f of faqs) {
  insertFaq.run(f);
}
console.log(`Inserted ${faqs.length} FAQ items`);

// --- Blog Posts ---
const insertBlog = db.prepare(`
  INSERT INTO blog_posts (slug, title, description, content, tags, published_at)
  VALUES (@slug, @title, @description, @content, @tags, @publishedAt)
`);

const blogPosts = [
  {
    slug: "gemini-rag-file-search",
    title: "Gemini RAG File Search - วิธีใช้ Gemini ค้นหาและวิเคราะห์ไฟล์",
    description: "เรียนรู้วิธีใช้ Google Gemini สำหรับ RAG (Retrieval-Augmented Generation) ค้นหาและวิเคราะห์ข้อมูลจากไฟล์เอกสาร",
    content: `<section><h2>RAG คืออะไร?</h2><p>RAG (Retrieval-Augmented Generation) คือเทคนิคที่ให้ AI ค้นหาข้อมูลจากเอกสารที่เรามี แล้วใช้ข้อมูลนั้นในการตอบคำถาม ทำให้ AI ตอบได้แม่นยำขึ้น โดยอ้างอิงจากข้อมูลจริงไม่ใช่ข้อมูลที่ AI จำมา</p></section><section><h2>Gemini File Search</h2><p>Google Gemini มีความสามารถในการรับไฟล์เอกสาร (PDF, Text, CSV) แล้ววิเคราะห์เนื้อหาได้ เราสามารถใช้ Gemini API ร่วมกับ n8n เพื่อสร้าง workflow ที่:</p><ul><li>อัพโหลดเอกสารไปยัง Gemini</li><li>ถามคำถามเกี่ยวกับเนื้อหาในเอกสาร</li><li>สรุปเอกสารอัตโนมัติ</li><li>ค้นหาข้อมูลเฉพาะจากเอกสารหลายไฟล์</li></ul></section><section><h2>ใช้งานกับ n8n</h2><p>ด้วย Node2Flow MCP Server คุณสามารถสั่ง AI ให้สร้าง n8n workflow ที่ใช้ Gemini RAG ได้โดยตรง ไม่ต้องเขียนโค้ดเอง แค่บอก AI ว่าต้องการทำอะไร</p></section>`,
    tags: JSON.stringify(["Gemini", "RAG", "AI"]),
    publishedAt: "2026-01-15",
  },
  {
    slug: "mcp-101-what-is-mcp",
    title: "MCP 101 - MCP คืออะไร? ทำไมต้องใช้?",
    description: "ทำความเข้าใจ Model Context Protocol (MCP) มาตรฐานใหม่ที่เชื่อมต่อ AI กับเครื่องมือต่างๆ ได้อย่างง่ายดาย",
    content: `<section><h2>MCP คืออะไร?</h2><p>Model Context Protocol (MCP) คือมาตรฐานเปิดที่พัฒนาโดย Anthropic สำหรับเชื่อมต่อ AI กับเครื่องมือและบริการต่างๆ เปรียบเสมือน "USB-C สำหรับ AI" ที่ทำให้ AI สามารถใช้งานเครื่องมือภายนอกได้โดยตรง</p></section><section><h2>MCP vs API</h2><p>API แบบเดิมต้องเขียนโค้ดเชื่อมต่อทีละตัว แต่ MCP ออกแบบมาให้ AI เข้าใจและใช้งานได้เอง เพียงแค่บอก AI ว่าต้องการทำอะไร AI จะเลือก tool ที่เหมาะสมและเรียกใช้งานให้อัตโนมัติ</p></section><section><h2>ทำไมต้อง MCP?</h2><ul><li>ไม่ต้องเขียนโค้ด - AI เรียกใช้ tool ได้เอง</li><li>มาตรฐานเดียว - ใช้กับ AI Client ไหนก็ได้</li><li>ปลอดภัย - ควบคุมสิทธิ์การเข้าถึงได้</li><li>ขยายง่าย - เพิ่ม tool ใหม่ได้ตลอด</li></ul></section>`,
    tags: JSON.stringify(["MCP", "Beginner", "Tutorial"]),
    publishedAt: "2026-01-20",
  },
  {
    slug: "n8n-mcp-workflow-automation",
    title: "สร้าง n8n Workflow ด้วย AI ผ่าน MCP Server",
    description: "สอนวิธีใช้ MCP Server สั่ง AI สร้าง n8n workflow อัตโนมัติ ไม่ต้องลาก node เอง",
    content: `<section><h2>AI สร้าง Workflow ให้?</h2><p>ด้วย Node2Flow MCP Server คุณสามารถสั่ง AI สร้าง n8n workflow ได้โดยตรง เพียงบอกว่าต้องการ workflow ที่ทำอะไร AI จะสร้างให้ทั้ง nodes, connections และ configurations</p></section><section><h2>วิธีใช้งาน</h2><ul><li>เชื่อมต่อ MCP Server กับ Claude Desktop หรือ AI Client</li><li>บอก AI ว่าต้องการ workflow แบบไหน เช่น "สร้าง workflow รับ webhook แล้วส่ง LINE notify"</li><li>AI สร้าง workflow และ deploy ลง n8n ให้อัตโนมัติ</li><li>ตรวจสอบ workflow ใน n8n แล้วเปิดใช้งาน</li></ul></section><section><h2>ตัวอย่าง Workflow</h2><p>ตัวอย่าง workflow ที่ AI สร้างได้: Webhook to LINE Notify, Google Sheets sync, WooCommerce order processing, Scheduled report generation และอีกมากมาย</p></section>`,
    tags: JSON.stringify(["n8n", "Workflow", "AI", "Automation"]),
    publishedAt: "2026-01-25",
  },
];

for (const b of blogPosts) {
  insertBlog.run(b);
}
console.log(`Inserted ${blogPosts.length} blog posts`);

console.log("\nSeed complete!");
