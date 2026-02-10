"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { speakers, getCategoryColor } from "@/lib/data";

export default function SpeakersPage() {
  const [search, setSearch] = useState("");
  const [expandedSpeaker, setExpandedSpeaker] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = speakers.filter(
    (s) =>
      search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Speakers</h1>
          <p className="text-sm text-slate-500 mt-1">
            {speakers.length} speakers in your bureau roster
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search speakers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 w-64"
            />
          </div>
          <div className="flex rounded-lg border p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-md px-3 py-1 text-xs font-medium cursor-pointer ${
                viewMode === "grid" ? "bg-indigo-600 text-white" : "text-slate-600"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md px-3 py-1 text-xs font-medium cursor-pointer ${
                viewMode === "list" ? "bg-indigo-600 text-white" : "text-slate-600"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-3 gap-4">
          {filtered.map((speaker) => (
            <Card key={speaker.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700">
                    {speaker.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-slate-900">{speaker.name}</p>
                      {!speaker.available && (
                        <Badge className="bg-red-100 text-red-600 border-red-200 text-[10px]">
                          Unavailable
                        </Badge>
                      )}
                    </div>
                    <Badge className={`${getCategoryColor(speaker.category)} mt-1`}>
                      {speaker.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3 line-clamp-2">{speaker.bio}</p>
                <Separator className="my-3" />
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-slate-500">Fee Range</p>
                    <p className="text-xs font-semibold text-slate-900">
                      &pound;{(speaker.fee / 1000).toFixed(0)}k-&pound;
                      {(speaker.feeMax / 1000).toFixed(0)}k
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Contracts</p>
                    <p className="text-xs font-semibold text-slate-900">{speaker.contractCount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">T&Cs</p>
                    <p className="text-xs font-semibold text-slate-900">{speaker.tcVersion}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-3 text-xs"
                  onClick={() =>
                    setExpandedSpeaker(expandedSpeaker === speaker.id ? null : speaker.id)
                  }
                >
                  <FileText className="h-3 w-3" />
                  {expandedSpeaker === speaker.id ? "Hide" : "View"} T&Cs
                  {expandedSpeaker === speaker.id ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </Button>
                {expandedSpeaker === speaker.id && (
                  <div className="mt-2 rounded-md bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed">
                    {speaker.tcText}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {filtered.length} Speaker{filtered.length !== 1 ? "s" : ""}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Speaker</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Fee Range</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Contracts</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">T&Cs</th>
                  <th className="pb-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((speaker) => (
                  <tr key={speaker.id} className="hover:bg-slate-50">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                          {speaker.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{speaker.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">
                      <Badge className={getCategoryColor(speaker.category)}>{speaker.category}</Badge>
                    </td>
                    <td className="py-3 text-sm text-slate-900">
                      &pound;{speaker.fee.toLocaleString()} - &pound;{speaker.feeMax.toLocaleString()}
                    </td>
                    <td className="py-3 text-sm text-slate-600">{speaker.contractCount}</td>
                    <td className="py-3 text-sm text-slate-600">{speaker.tcVersion}</td>
                    <td className="py-3">
                      {speaker.available ? (
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Available</Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700 border-red-200">Unavailable</Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">No speakers found matching your search.</p>
        </div>
      )}
    </div>
  );
}
