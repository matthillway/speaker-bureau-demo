"use client";

import {
  CheckCircle2,
  Cloud,
  FileText,
  FolderOpen,
  PenTool,
  Shield,
  Settings2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const integrations = [
  {
    name: "Microsoft Teams",
    description: "Connected to Hillway Shared Drive. Contracts are automatically saved to the Teams folder structure.",
    icon: Cloud,
    status: "connected" as const,
    lastSync: "2 minutes ago",
    details: "Workspace: Hillway Speaker Bureau",
  },
  {
    name: "DocuSign",
    description: "E-signature integration for sending contracts to clients and speakers.",
    icon: PenTool,
    status: "connected" as const,
    lastSync: "5 minutes ago",
    details: "Account: operations@hillwayco.uk",
  },
  {
    name: "SharePoint",
    description: "Document storage and template management connected via Microsoft Graph.",
    icon: FolderOpen,
    status: "connected" as const,
    lastSync: "1 minute ago",
    details: "Site: Speaker Bureau Portal",
  },
];

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage integrations, templates, and folder configuration
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Integrations</h2>
        <div className="grid gap-4">
          {integrations.map((integration) => (
            <Card key={integration.name}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 shrink-0">
                      <integration.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-slate-900">{integration.name}</h3>
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{integration.description}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                        <p className="text-xs text-slate-400">{integration.details}</p>
                        <p className="text-xs text-slate-400">Last sync: {integration.lastSync}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="self-start shrink-0">
                    <Settings2 className="h-3 w-3" />
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Contract Templates</h2>
        <Card>
          <CardContent className="p-4 sm:p-6 space-y-4">
            {[
              { name: "Standard Speaker Contract", date: "5 Feb 2026", version: "4.2" },
              { name: "Workshop Agreement", date: "28 Jan 2026", version: "2.1" },
              { name: "International Speaker Contract", date: "15 Jan 2026", version: "1.8" },
            ].map((template) => (
              <div key={template.name} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-indigo-600 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{template.name}</p>
                    <p className="text-xs text-slate-500">Last updated: {template.date} &middot; Version {template.version}</p>
                  </div>
                </div>
                <div className="flex gap-2 ml-8 sm:ml-0">
                  <Button variant="outline" size="sm">Preview</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              + Add Template
            </Button>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Folder Structure</h2>
        <Card>
          <CardContent className="p-4 sm:p-6 space-y-4">
            <p className="text-sm text-slate-500">
              Configure where generated contracts are stored in your Microsoft Teams / SharePoint.
            </p>
            <div className="space-y-3">
              <div>
                <Label>Root Folder</Label>
                <Input
                  defaultValue="Speaker Bureau / Contracts"
                  className="mt-1.5 font-mono text-xs"
                />
              </div>
              <div>
                <Label>Sub-folder Pattern</Label>
                <Input
                  defaultValue="{year} / {event-name}"
                  className="mt-1.5 font-mono text-xs"
                />
                <p className="text-xs text-slate-400 mt-1">
                  Available tokens: {"{year}"}, {"{month}"}, {"{speaker-name}"}, {"{event-name}"},{" "}
                  {"{client-company}"}
                </p>
              </div>
              <div>
                <Label>File Naming Pattern</Label>
                <Input
                  defaultValue="{contract-id}_{speaker-name}_{event-name}"
                  className="mt-1.5 font-mono text-xs"
                />
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
              <Shield className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 break-all">
                Example path: <span className="font-mono">Speaker Bureau / Contracts / 2026 / Annual Leadership Summit / CTR-2026-001_Amanda_Forbes_Annual_Leadership_Summit.pdf</span>
              </p>
            </div>
            <div className="flex justify-end">
              <Button>Save Configuration</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
