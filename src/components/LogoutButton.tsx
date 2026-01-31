"use client";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function LogoutButton() {
  const t = useTranslations("nav");

  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200 cursor-pointer"
    >
      {t("logout")}
    </button>
  );
}
