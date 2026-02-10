"use client";

import { useState } from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Search, PlusCircle, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { contracts, getStatusColor, getStatusLabel, type Contract } from "@/lib/data";

const statusFilters: (Contract["status"] | "all")[] = [
  "all",
  "draft",
  "generated",
  "sent",
  "signed",
  "completed",
];

export default function ContractsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<Contract["status"] | "all">("all");

  const filtered = contracts.filter((c) => {
    const matchesSearch =
      search === "" ||
      c.eventName.toLowerCase().includes(search.toLowerCase()) ||
      c.speakerName.toLowerCase().includes(search.toLowerCase()) ||
      c.clientCompany.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Contracts</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage all speaker engagement contracts
          </p>
        </div>
        <Button size="sm" asChild className="self-start sm:self-auto sm:size-default">
          <Link href="/contracts/new">
            <PlusCircle className="h-4 w-4" />
            New Contract
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <CardTitle className="text-base">
              {filtered.length} Contract{filtered.length !== 1 ? "s" : ""}
            </CardTitle>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search contracts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 w-full sm:w-64"
                />
              </div>
              <div className="flex items-center gap-1 rounded-lg border p-1 overflow-x-auto">
                <Filter className="h-3 w-3 text-slate-400 mx-1 shrink-0" />
                {statusFilters.map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`rounded-md px-2 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      statusFilter === status
                        ? "bg-indigo-600 text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {status === "all" ? "All" : getStatusLabel(status)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Contract</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Event</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Speaker</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Client</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Fee</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((contract) => (
                  <tr key={contract.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3">
                      <Link
                        href={`/contracts/${contract.id}`}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                      >
                        {contract.id}
                      </Link>
                    </td>
                    <td className="py-3">
                      <Link href={`/contracts/${contract.id}`} className="text-sm text-slate-900 hover:text-indigo-600">
                        {contract.eventName}
                      </Link>
                    </td>
                    <td className="py-3 text-sm text-slate-600">{contract.speakerName}</td>
                    <td className="py-3 text-sm text-slate-600">{contract.clientCompany}</td>
                    <td className="py-3 text-sm text-slate-600">
                      {format(parseISO(contract.eventDate), "d MMM yyyy")}
                    </td>
                    <td className="py-3 text-sm font-medium text-slate-900">
                      &pound;{contract.fee.toLocaleString()}
                    </td>
                    <td className="py-3">
                      <Badge className={getStatusColor(contract.status)}>
                        {getStatusLabel(contract.status)}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card list */}
          <div className="md:hidden space-y-3">
            {filtered.map((contract) => (
              <Link
                key={contract.id}
                href={`/contracts/${contract.id}`}
                className="block rounded-lg border p-3 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-indigo-600">{contract.id}</span>
                  <Badge className={getStatusColor(contract.status)}>
                    {getStatusLabel(contract.status)}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-slate-900 truncate">{contract.eventName}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {contract.speakerName} &middot; {contract.clientCompany}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-500">
                    {format(parseISO(contract.eventDate), "d MMM yyyy")}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    &pound;{contract.fee.toLocaleString()}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-8 text-center text-sm text-slate-500">
              No contracts found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
