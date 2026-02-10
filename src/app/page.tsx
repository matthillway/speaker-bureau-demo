"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  FileText,
  PenTool,
  CheckCircle2,
  Users,
  PlusCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { contracts, activities, getStatusColor, getStatusLabel } from "@/lib/data";

const stats = [
  {
    title: "Total Contracts",
    value: contracts.length,
    icon: FileText,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Pending Signatures",
    value: contracts.filter((c) => c.status === "sent").length,
    icon: PenTool,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Completed This Month",
    value: contracts.filter((c) => c.status === "completed").length,
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Active Speakers",
    value: 10,
    icon: Users,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export default function DashboardPage() {
  const recentContracts = [...contracts]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 6);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">
            Welcome back, Sarah. Here&apos;s your contract overview.
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Button variant="outline" size="sm" asChild className="sm:size-default">
            <Link href="/speakers">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">View </span>Speakers
            </Link>
          </Button>
          <Button size="sm" asChild className="sm:size-default">
            <Link href="/contracts/new">
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline">New </span>Contract
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-slate-500">{stat.title}</p>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <div className={`flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-4 w-4 md:h-5 md:w-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-base">Recent Contracts</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contracts">
                  View all <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentContracts.map((contract) => (
                  <Link
                    key={contract.id}
                    href={`/contracts/${contract.id}`}
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <p className="text-sm font-medium text-slate-900 truncate">
                          {contract.eventName}
                        </p>
                        <Badge className={getStatusColor(contract.status)}>
                          {getStatusLabel(contract.status)}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 truncate">
                        {contract.speakerName} &middot; {contract.clientCompany} &middot;{" "}
                        {format(parseISO(contract.eventDate), "d MMM yyyy")}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-900 ml-3 shrink-0">
                      &pound;{contract.fee.toLocaleString()}
                    </p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.slice(0, 6).map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 mt-0.5">
                      <Clock className="h-3 w-3 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {activity.action}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {format(parseISO(activity.timestamp), "d MMM, HH:mm")} &middot;{" "}
                        {activity.user}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
