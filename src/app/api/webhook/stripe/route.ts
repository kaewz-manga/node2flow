import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { orders, userDownloads, userSubscriptions, products } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const userId = session.metadata?.userId;
      const productSlug = session.metadata?.productSlug;

      if (!userId || !productSlug) break;

      const amount = (session.amount_total || 0) / 100;

      // Find product
      const product = db
        .select()
        .from(products)
        .where(eq(products.slug, productSlug))
        .get();

      // Create order
      const order = db
        .insert(orders)
        .values({
          userId,
          productId: product?.id,
          amount,
          currency: "THB",
          status: "paid",
          stripeSessionId: session.id,
        })
        .returning()
        .get();

      // Grant download access for one-time purchases
      if (product && session.mode === "payment") {
        db.insert(userDownloads)
          .values({
            userId,
            productId: product.id,
            orderId: order.id,
          })
          .run();
      }

      // Create subscription record
      if (session.mode === "subscription" && session.subscription) {
        const subId =
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription.id;
        const sub = await stripe.subscriptions.retrieve(subId);
        const periodEnd =
          (sub as unknown as Record<string, number>).current_period_end ?? 0;
        db.insert(userSubscriptions)
          .values({
            userId,
            planId: product?.id || 0,
            stripeSubscriptionId: sub.id,
            status: "active",
            currentPeriodEnd: new Date(periodEnd * 1000).toISOString(),
          })
          .run();
      }
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object;
      db.update(userSubscriptions)
        .set({ status: "cancelled" })
        .where(eq(userSubscriptions.stripeSubscriptionId, sub.id))
        .run();
      break;
    }
  }

  return NextResponse.json({ received: true });
}
