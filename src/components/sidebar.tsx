"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  PlusCircle,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Contracts", href: "/contracts", icon: FileText },
  { name: "New Contract", href: "/contracts/new", icon: PlusCircle },
  { name: "Speakers", href: "/speakers", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="text-lg font-bold text-slate-900">SpeakerFlow</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
            SJ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">Sarah Johnson</p>
            <p className="text-xs text-slate-500 truncate">Operations Manager</p>
          </div>
        </div>
      </div>
      <div className="border-t px-4 py-3">
        <p className="text-[10px] text-slate-400 text-center">
          Powered by{" "}
          <span className="font-semibold text-indigo-500">Hillway</span>
        </p>
      </div>
    </>
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex h-14 items-center gap-3 border-b bg-white px-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100"
        >
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
            <Zap className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-base font-bold text-slate-900">SpeakerFlow</span>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white flex flex-col shadow-xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 z-10"
            >
              <X className="h-4 w-4 text-slate-500" />
            </button>
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden md:flex h-screen w-64 flex-col border-r bg-white shrink-0">
        <SidebarContent />
      </div>
    </>
  );
}
