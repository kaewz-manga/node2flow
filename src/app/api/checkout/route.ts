import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { productName, price, productSlug, mode } = body as {
    productName: string;
    price: number;
    productSlug: string;
    mode: "payment" | "subscription";
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3333";

  const checkoutSession = await stripe.checkout.sessions.create({
    mode,
    customer_email: session.user.email!,
    metadata: {
      userId: session.user.id,
      productSlug,
    },
    line_items: [
      {
        price_data: {
          currency: "thb",
          product_data: { name: productName },
          unit_amount: Math.round(price * 100),
          ...(mode === "subscription" && { recurring: { interval: "month" } }),
        },
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/dashboard?payment=success`,
    cancel_url: `${baseUrl}/shop?payment=cancelled`,
  });

  return NextResponse.json({ url: checkoutSession.url });
}
