import { sqliteTable, text, integer, real, primaryKey } from "drizzle-orm/sqlite-core";

// ============================================
// Auth.js Tables (official schema)
// ============================================

export const users = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
  role: text("role").default("user"),
});

export const accounts = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    primaryKey({ columns: [account.provider, account.providerAccountId] }),
  ]
);

export const sessions = sqliteTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (verificationToken) => [
    primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  ]
);

// ============================================
// App Tables
// ============================================

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  type: text("type").notNull(), // 'pdf' | 'json' | 'bundle'
  price: real("price").notNull(),
  originalPrice: real("original_price"),
  downloadUrl: text("download_url"),
  tags: text("tags"), // JSON array
  isFree: integer("is_free").default(0),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const servicePlans = sqliteTable("service_plans", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  price: real("price").notNull(),
  period: text("period").default("month"),
  features: text("features").notNull(), // JSON array
  isPopular: integer("is_popular").default(0),
  stripePriceId: text("stripe_price_id"),
  sortOrder: integer("sort_order").default(0),
});

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  productId: integer("product_id").references(() => products.id),
  planId: integer("plan_id").references(() => servicePlans.id),
  amount: real("amount").notNull(),
  currency: text("currency").default("THB"),
  status: text("status").default("pending"), // 'pending' | 'paid' | 'cancelled'
  stripeSessionId: text("stripe_session_id"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const userDownloads = sqliteTable("user_downloads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  orderId: integer("order_id")
    .notNull()
    .references(() => orders.id),
  downloadedAt: text("downloaded_at"),
});

export const userSubscriptions = sqliteTable("user_subscriptions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  planId: integer("plan_id")
    .notNull()
    .references(() => servicePlans.id),
  stripeSubscriptionId: text("stripe_subscription_id"),
  status: text("status").default("active"), // 'active' | 'cancelled' | 'expired'
  currentPeriodEnd: text("current_period_end"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const faqItems = sqliteTable("faq_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category"),
  sortOrder: integer("sort_order").default(0),
});

export const blogPosts = sqliteTable("blog_posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(), // HTML content
  tags: text("tags"), // JSON array
  publishedAt: text("published_at").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const contactMessages = sqliteTable("contact_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});
