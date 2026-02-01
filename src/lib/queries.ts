import { db } from "./db";
import { blogPosts, products, servicePlans, faqItems, notifications } from "./schema";
import { and } from "drizzle-orm";
import { eq, desc, asc } from "drizzle-orm";

// --- Blog ---
export async function getAllPosts() {
  return db.select().from(blogPosts).orderBy(desc(blogPosts.publishedAt)).all();
}

export async function getPostBySlug(slug: string) {
  return db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).get();
}

// --- Products ---
export async function getAllProducts() {
  return db.select().from(products).all();
}

export async function getFreeProducts() {
  return db.select().from(products).where(eq(products.isFree, 1)).all();
}

export async function getPaidProducts() {
  return db.select().from(products).where(eq(products.isFree, 0)).all();
}

// --- Service Plans ---
export async function getAllPlans() {
  return db.select().from(servicePlans).orderBy(asc(servicePlans.sortOrder)).all();
}

// --- FAQ ---
export async function getAllFaqs() {
  return db.select().from(faqItems).orderBy(asc(faqItems.sortOrder)).all();
}

// --- Notifications ---
export async function getUserNotifications(userId: string) {
  return db
    .select()
    .from(notifications)
    .where(eq(notifications.userId, userId))
    .orderBy(desc(notifications.createdAt))
    .all();
}

export async function deleteNotification(id: number, userId: string) {
  return db
    .delete(notifications)
    .where(and(eq(notifications.id, id), eq(notifications.userId, userId)))
    .run();
}

export async function markNotificationRead(id: number, userId: string) {
  return db
    .update(notifications)
    .set({ isRead: 1 })
    .where(and(eq(notifications.id, id), eq(notifications.userId, userId)))
    .run();
}
