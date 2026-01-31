import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";
import { LayoutDashboard, Package, Download, CreditCard } from "lucide-react";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/orders", label: "Orders", icon: Package },
  { href: "/dashboard/downloads", label: "Downloads", icon: Download },
  { href: "/dashboard/subscription", label: "Subscription", icon: CreditCard },
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
      <div className="w-full max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex gap-8 max-md:flex-col">
          {/* Sidebar */}
          <aside className="w-64 shrink-0 max-md:w-full">
            {/* Profile */}
            <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-5 mb-4">
              <div className="flex items-center gap-3">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || ""}
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="font-medium text-n2f-text text-sm">
                    {session.user.name}
                  </p>
                  <p className="text-xs text-n2f-text-muted">
                    {session.user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav className="bg-n2f-secondary border border-n2f-border rounded-xl p-2">
              {sidebarLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-n2f-text-muted hover:text-n2f-text hover:bg-n2f-hover rounded-lg transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
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
