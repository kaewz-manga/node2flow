"use client";

import { useState } from "react";

interface BuyButtonProps {
  productName: string;
  productSlug: string;
  price: number;
  isFree: boolean;
  mode: "payment" | "subscription";
}

export default function BuyButton({
  productName,
  productSlug,
  price,
  isFree,
  mode,
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (isFree) {
      // Free products go to get-started for download
      window.location.href = "/login";
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, productSlug, price, mode }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else if (res.status === 401) {
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-50 ${
        isFree
          ? "bg-green-500/15 text-green-500 border border-green-500/30 hover:bg-green-500/25"
          : "bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-white hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)]"
      }`}
    >
      {loading ? "..." : isFree ? "Download" : "Buy"}
    </button>
  );
}
