import { db } from "./db";
import { blogPosts, products, servicePlans, faqItems, notifications } from "./schema";
import { and } from "drizzle-orm";
import { eq, desc, asc } from "drizzle-orm";

// --- Blog ---
export function getAllPosts() {
  return db.select().from(blogPosts).orderBy(desc(blogPosts.publishedAt)).all();
}

export function getPostBySlug(slug: string) {
  return db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).get();
}

// --- Products ---
export function getAllProducts() {
  return db.select().from(products).all();
}

export function getFreeProducts() {
  return db.select().from(products).where(eq(products.isFree, 1)).all();
}

export function getPaidProducts() {
  return db.select().from(products).where(eq(products.isFree, 0)).all();
}

// --- Service Plans ---
export function getAllPlans() {
  return db.select().from(servicePlans).orderBy(asc(servicePlans.sortOrder)).all();
}

// --- FAQ ---
export function getAllFaqs() {
  return db.select().from(faqItems).orderBy(asc(faqItems.sortOrder)).all();
}

// --- Notifications ---
export function getUserNotifications(userId: string) {
  return db
    .select()
    .from(notifications)
    .where(eq(notifications.userId, userId))
    .orderBy(desc(notifications.createdAt))
    .all();
}

export function deleteNotification(id: number, userId: string) {
  return db
    .delete(notifications)
    .where(and(eq(notifications.id, id), eq(notifications.userId, userId)))
    .run();
}

export function markNotificationRead(id: number, userId: string) {
  return db
    .update(notifications)
    .set({ isRead: 1 })
    .where(and(eq(notifications.id, id), eq(notifications.userId, userId)))
    .run();
}
