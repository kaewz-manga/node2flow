import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// ============================================
// Auth.js Tables
// ============================================

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: text("emailVerified"),
  image: text("image"),
  role: text("role").default("user"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const accounts = sqliteTable("accounts", {
  id: text("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  access_token: text("access_token"),
  refresh_token: text("refresh_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
});

export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  sessionToken: text("sessionToken").notNull().unique(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: text("expires").notNull(),
});

export const verificationTokens = sqliteTable("verificationTokens", {
  identifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: text("expires").notNull(),
});

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

export const contactMessages = sqliteTable("contact_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});
