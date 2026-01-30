import { db } from "./db";
import { blogPosts, products, servicePlans, faqItems } from "./schema";
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
