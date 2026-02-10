"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  ArrowLeft,
  FileText,
  Send,
  Download,
  CheckCircle2,
  Circle,
  Clock,
  Upload,
  PenTool,
  Printer,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { contracts, speakers, getStatusColor, getStatusLabel } from "@/lib/data";


type TimelineStep = {
  label: string;
  description: string;
  done: boolean;
  current: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

function getTimeline(status: string): TimelineStep[] {
  const statusOrder = ["draft", "generated", "sent", "signed", "completed"];
  const idx = statusOrder.indexOf(status);

  return [
    {
      label: "Created",
      description: "Contract draft created",
      done: idx >= 0,
      current: idx === 0,
      icon: FileText,
    },
    {
      label: "Generated",
      description: "Document generated from template",
      done: idx >= 1,
      current: idx === 1,
      icon: Printer,
    },
    {
      label: "Saved to Teams",
      description: "Filed in SharePoint/Teams folder",
      done: idx >= 1,
      current: false,
      icon: Upload,
    },
    {
      label: "DocuSign Draft",
      description: "Envelope created in DocuSign",
      done: idx >= 2,
      current: false,
      icon: PenTool,
    },
    {
      label: "Sent for Signature",
      description: "Sent to client via DocuSign",
      done: idx >= 2,
      current: idx === 2,
      icon: Send,
    },
    {
      label: "Signed",
      description: "All parties have signed",
      done: idx >= 3,
      current: idx === 3,
      icon: CheckCircle2,
    },
    {
      label: "Completed",
      description: "Event delivered, payment processed",
      done: idx >= 4,
      current: idx === 4,
      icon: CheckCircle2,
    },
  ];
}

export default function ContractDetailPage() {
  const { id } = useParams<{ id: string }>();
  const contract = contracts.find((c) => c.id === id);

  if (!contract) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <p className="text-slate-500">Contract not found</p>
        <Button variant="outline" asChild>
          <Link href="/contracts">Back to Contracts</Link>
        </Button>
      </div>
    );
  }

  const speaker = speakers.find((s) => s.id === contract.speakerId);
  const timeline = getTimeline(contract.status);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/contracts">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900">{contract.id}</h1>
              <Badge className={getStatusColor(contract.status)}>
                {getStatusLabel(contract.status)}
              </Badge>
            </div>
            <p className="text-sm text-slate-500 mt-0.5">{contract.eventName}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {contract.status === "draft" && (
            <Button>
              <FileText className="h-4 w-4" />
              Generate Contract
            </Button>
          )}
          {contract.status === "generated" && (
            <Button>
              <Send className="h-4 w-4" />
              Send for Signature
            </Button>
          )}
          {contract.status === "sent" && (
            <Button variant="outline">
              <Clock className="h-4 w-4" />
              Chase Signature
            </Button>
          )}
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contract Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Event</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">{contract.eventName}</p>
                    <p className="text-xs text-slate-500">
                      {format(parseISO(contract.eventDate), "d MMMM yyyy")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Venue</p>
                    <p className="text-sm text-slate-900 mt-1">
                      {contract.venue}, {contract.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Client</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">{contract.clientName}</p>
                    <p className="text-xs text-slate-500">{contract.clientCompany}</p>
                    <p className="text-xs text-slate-500">{contract.clientEmail}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Speaker</p>
                    {speaker && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
                          {speaker.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{speaker.name}</p>
                          <p className="text-xs text-slate-500">{speaker.category}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Fee</p>
                    <p className="text-lg font-bold text-slate-900 mt-1">
                      &pound;{contract.fee.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-500">{contract.paymentTerms}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Notes</p>
                    <p className="text-sm text-slate-700 mt-1">{contract.notes}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Document Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                <FileText className="h-12 w-12 text-slate-300 mx-auto" />
                <p className="text-sm font-medium text-slate-500 mt-3">
                  {contract.status === "draft"
                    ? "Contract document will appear here once generated"
                    : `${contract.id}_Contract.pdf`}
                </p>
                {contract.status !== "draft" && (
                  <Button variant="outline" size="sm" className="mt-3">
                    <Download className="h-3 w-3" />
                    Download
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Workflow Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-0">
                {timeline.map((step, i) => (
                  <div key={step.label} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      {step.done ? (
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                        </div>
                      ) : step.current ? (
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600 bg-indigo-50">
                          <Circle className="h-2.5 w-2.5 fill-indigo-600 text-indigo-600" />
                        </div>
                      ) : (
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-slate-200">
                          <Circle className="h-2.5 w-2.5 text-slate-200" />
                        </div>
                      )}
                      {i < timeline.length - 1 && (
                        <div
                          className={`w-px flex-1 min-h-[24px] ${
                            step.done ? "bg-indigo-600" : "bg-slate-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="pb-4">
                      <p
                        className={`text-sm font-medium ${
                          step.done || step.current ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Separator className="my-4" />
          <div className="text-xs text-slate-400 space-y-1">
            <p>Created: {format(parseISO(contract.createdAt), "d MMM yyyy")}</p>
            <p>Last updated: {format(parseISO(contract.updatedAt), "d MMM yyyy")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
