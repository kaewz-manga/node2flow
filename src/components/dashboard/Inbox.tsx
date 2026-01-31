"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  is_read: number;
  created_at: string;
}

const typeColors: Record<string, string> = {
  success: "border-green-500/30 bg-green-500/5",
  warning: "border-amber-500/30 bg-amber-500/5",
  info: "border-n2f-accent/20 bg-n2f-accent/5",
};

const typeDots: Record<string, string> = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  info: "bg-n2f-accent",
};

export default function Inbox() {
  const t = useTranslations("dashboard");
  const [items, setItems] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/notifications")
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function handleDelete(id: number) {
    await fetch("/api/notifications", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setItems((prev) => prev.filter((n) => n.id !== id));
  }

  async function handleRead(id: number) {
    await fetch("/api/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_read: 1 } : n)),
    );
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6">
        <p className="text-sm text-n2f-text-muted">{t("loading")}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          {t("inbox")}
          {items.filter((n) => !n.is_read).length > 0 && (
            <span className="text-xs bg-n2f-accent text-black font-bold px-2 py-0.5 rounded-full">
              {items.filter((n) => !n.is_read).length}
            </span>
          )}
        </h2>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-n2f-text-dim">{t("noNotifications")}</p>
      ) : (
        <div className="space-y-3">
          {items.map((n) => (
            <div
              key={n.id}
              className={`border rounded-xl p-4 transition-all duration-200 ${
                typeColors[n.type] || typeColors.info
              } ${n.is_read ? "opacity-60" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${typeDots[n.type] || typeDots.info}`}
                    />
                    <span className="text-sm font-semibold text-white truncate">
                      {n.title}
                    </span>
                  </div>
                  <p className="text-sm text-n2f-text-muted leading-relaxed pl-4">
                    {n.message}
                  </p>
                  <p className="text-xs text-n2f-text-dim mt-2 pl-4">
                    {n.created_at}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0">
                  {!n.is_read && (
                    <button
                      onClick={() => handleRead(n.id)}
                      className="text-xs text-n2f-text-muted hover:text-white px-2 py-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      title="Mark as read"
                    >
                      {t("markRead")}
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(n.id)}
                    className="text-xs text-red-400/70 hover:text-red-400 px-2 py-1 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                    title="Delete"
                  >
                    {t("delete")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
