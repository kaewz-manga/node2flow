import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/dashboard/orders", label: "Orders", icon: "📦" },
  { href: "/dashboard/downloads", label: "Downloads", icon: "⬇️" },
  { href: "/dashboard/subscription", label: "Subscription", icon: "💳" },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-n2f pt-20">
      <div className="w-full max-w-[1100px] mx-auto px-6 py-8">
        <div className="flex gap-8 max-md:flex-col">
          {/* Sidebar */}
          <aside className="w-64 shrink-0 max-md:w-full">
            {/* Profile */}
            <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || ""}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="font-semibold text-white text-sm">
                    {session.user.name}
                  </p>
                  <p className="text-xs text-n2f-text-muted">
                    {session.user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-2">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-n2f-text-muted hover:text-white hover:bg-n2f-accent-subtle rounded-xl transition-all duration-200"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-n2f-border mt-1 pt-1">
                <LogoutButton />
              </div>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </main>
  );
}
