"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  Upload,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { speakers, getCategoryColor } from "@/lib/data";

const steps = [
  { id: 1, title: "Event Details" },
  { id: 2, title: "Speaker" },
  { id: 3, title: "Contract" },
  { id: 4, title: "Review" },
];

export default function NewContractPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedTc, setExpandedTc] = useState<string | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const [form, setForm] = useState({
    eventName: "",
    eventDate: "",
    venue: "",
    location: "",
    clientName: "",
    clientCompany: "",
    clientEmail: "",
    clientPhone: "",
    fee: "",
    paymentTerms: "50% deposit, balance 14 days before event",
    specialRequirements: "",
    travelAccommodation: "",
  });

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const speaker = speakers.find((s) => s.id === selectedSpeaker);

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto py-8 sm:py-16 text-center space-y-6 px-2">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Contract Generated Successfully</h1>
        <p className="text-slate-500">
          Contract <span className="font-semibold">CTR-2026-014</span> has been created for{" "}
          <span className="font-semibold">{form.eventName || "Your Event"}</span>.
        </p>
        <Card>
          <CardContent className="p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-slate-900">Next Steps</h3>
            <div className="space-y-2 text-sm text-slate-600 text-left">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                Contract document generated from template
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                Saved to Microsoft Teams / Contracts / 2026 folder
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full border-2 border-indigo-300 shrink-0" />
                DocuSign draft envelope created - ready for review
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full border-2 border-slate-200 shrink-0" />
                Awaiting your review before sending for signature
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/contracts">View All Contracts</Link>
          </Button>
          <Button asChild>
            <Link href="/contracts/CTR-2026-006">View Contract</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/contracts">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">New Contract</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Create a new speaker engagement contract
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="flex items-center gap-1 sm:gap-2">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center gap-1 sm:gap-2 flex-1">
            <div
              className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                step.id < currentStep
                  ? "bg-indigo-600 text-white"
                  : step.id === currentStep
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {step.id < currentStep ? <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : step.id}
            </div>
            <span
              className={`text-xs sm:text-sm font-medium hidden sm:inline ${
                step.id <= currentStep ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {step.title}
            </span>
            {i < steps.length - 1 && (
              <div
                className={`h-px flex-1 ${
                  step.id < currentStep ? "bg-indigo-600" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Event Details */}
      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="eventName">Event Name</Label>
                <Input
                  id="eventName"
                  placeholder="e.g., Annual Leadership Summit 2026"
                  value={form.eventName}
                  onChange={(e) => updateForm("eventName", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={(e) => updateForm("eventDate", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="venue">Venue</Label>
                <Input
                  id="venue"
                  placeholder="e.g., The ICC Birmingham"
                  value={form.venue}
                  onChange={(e) => updateForm("venue", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Birmingham"
                  value={form.location}
                  onChange={(e) => updateForm("location", e.target.value)}
                  className="mt-1.5"
                />
              </div>
            </div>
            <Separator />
            <h3 className="font-semibold text-slate-900">Client Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="clientName">Client Name</Label>
                <Input
                  id="clientName"
                  placeholder="Full name"
                  value={form.clientName}
                  onChange={(e) => updateForm("clientName", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="clientCompany">Company</Label>
                <Input
                  id="clientCompany"
                  placeholder="Company name"
                  value={form.clientCompany}
                  onChange={(e) => updateForm("clientCompany", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="clientEmail">Email</Label>
                <Input
                  id="clientEmail"
                  type="email"
                  placeholder="email@company.com"
                  value={form.clientEmail}
                  onChange={(e) => updateForm("clientEmail", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="clientPhone">Phone</Label>
                <Input
                  id="clientPhone"
                  type="tel"
                  placeholder="+44 ..."
                  value={form.clientPhone}
                  onChange={(e) => updateForm("clientPhone", e.target.value)}
                  className="mt-1.5"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Speaker Selection */}
      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Select a Speaker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {speakers.map((s) => (
              <div key={s.id}>
                <div
                  onClick={() => s.available && setSelectedSpeaker(s.id)}
                  className={`flex items-center gap-3 sm:gap-4 rounded-lg border p-3 sm:p-4 transition-colors ${
                    !s.available
                      ? "opacity-50 cursor-not-allowed"
                      : selectedSpeaker === s.id
                      ? "border-indigo-600 bg-indigo-50 cursor-pointer"
                      : "hover:bg-slate-50 cursor-pointer"
                  }`}
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs sm:text-sm font-bold text-indigo-700">
                    {s.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <p className="text-sm font-semibold text-slate-900">{s.name}</p>
                      <Badge className={getCategoryColor(s.category)}>{s.category}</Badge>
                      {!s.available && (
                        <Badge className="bg-red-100 text-red-700 border-red-200">Unavailable</Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{s.bio}</p>
                    <p className="text-xs font-semibold text-slate-900 mt-1 sm:hidden">
                      &pound;{s.fee.toLocaleString()} - &pound;{s.feeMax.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right shrink-0 hidden sm:block">
                    <p className="text-sm font-semibold text-slate-900">
                      &pound;{s.fee.toLocaleString()} - &pound;{s.feeMax.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-500">{s.contractCount} contracts</p>
                  </div>
                  <div className="shrink-0">
                    {selectedSpeaker === s.id ? (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-slate-200" />
                    )}
                  </div>
                </div>
                {selectedSpeaker === s.id && (
                  <div className="ml-13 sm:ml-16 mt-2">
                    <button
                      onClick={() => setExpandedTc(expandedTc === s.id ? null : s.id)}
                      className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 cursor-pointer"
                    >
                      <FileText className="h-3 w-3" />
                      View T&Cs ({s.tcVersion})
                      {expandedTc === s.id ? (
                        <ChevronUp className="h-3 w-3" />
                      ) : (
                        <ChevronDown className="h-3 w-3" />
                      )}
                    </button>
                    {expandedTc === s.id && (
                      <div className="mt-2 rounded-md bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed">
                        {s.tcText}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Step 3: Contract Details */}
      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Contract Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {speaker && (
              <div className="flex items-center gap-3 rounded-lg bg-indigo-50 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-200 text-xs font-bold text-indigo-700">
                  {speaker.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo-900">{speaker.name}</p>
                  <p className="text-xs text-indigo-600">
                    Fee range: &pound;{speaker.fee.toLocaleString()} - &pound;
                    {speaker.feeMax.toLocaleString()}
                  </p>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fee">Agreed Fee (&pound;)</Label>
                <Input
                  id="fee"
                  type="number"
                  placeholder="e.g., 10000"
                  value={form.fee}
                  onChange={(e) => updateForm("fee", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <select
                  id="paymentTerms"
                  value={form.paymentTerms}
                  onChange={(e) => updateForm("paymentTerms", e.target.value)}
                  className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                >
                  <option value="50% deposit, balance 14 days before event">
                    50% deposit, balance 14 days before event
                  </option>
                  <option value="50% deposit, balance 21 days before event">
                    50% deposit, balance 21 days before event
                  </option>
                  <option value="50% deposit, balance 30 days before event">
                    50% deposit, balance 30 days before event
                  </option>
                  <option value="Full payment 30 days before event">
                    Full payment 30 days before event
                  </option>
                  <option value="60% deposit, balance 14 days before event">
                    60% deposit, balance 14 days before event
                  </option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="travelAccommodation">Travel &amp; Accommodation</Label>
              <Textarea
                id="travelAccommodation"
                placeholder="Details of travel and accommodation arrangements..."
                value={form.travelAccommodation}
                onChange={(e) => updateForm("travelAccommodation", e.target.value)}
                className="mt-1.5"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="specialRequirements">Special Requirements / Notes</Label>
              <Textarea
                id="specialRequirements"
                placeholder="Any special requirements, topics to cover, AV needs, etc..."
                value={form.specialRequirements}
                onChange={(e) => updateForm("specialRequirements", e.target.value)}
                className="mt-1.5"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Review & Generate */}
      {currentStep === 4 && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contract Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Event</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">
                      {form.eventName || "Not specified"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {form.eventDate || "No date"} &middot; {form.venue || "No venue"},{" "}
                      {form.location || "No location"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Client</p>
                    <p className="text-sm font-semibold text-slate-900 mt-1">
                      {form.clientName || "Not specified"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {form.clientCompany || "No company"} &middot;{" "}
                      {form.clientEmail || "No email"}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Speaker</p>
                    {speaker ? (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
                          {speaker.avatar}
                        </div>
                        <p className="text-sm font-semibold text-slate-900">{speaker.name}</p>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-400 mt-1">No speaker selected</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Fee</p>
                    <p className="text-lg font-bold text-slate-900 mt-1">
                      &pound;{form.fee ? Number(form.fee).toLocaleString() : "0"}
                    </p>
                    <p className="text-xs text-slate-500">{form.paymentTerms}</p>
                  </div>
                </div>
              </div>
              {(form.specialRequirements || form.travelAccommodation) && (
                <>
                  <Separator />
                  {form.travelAccommodation && (
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        Travel &amp; Accommodation
                      </p>
                      <p className="text-sm text-slate-700 mt-1">{form.travelAccommodation}</p>
                    </div>
                  )}
                  {form.specialRequirements && (
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        Special Requirements
                      </p>
                      <p className="text-sm text-slate-700 mt-1">{form.specialRequirements}</p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Generation Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <label className="flex items-start gap-3 rounded-lg border p-3 cursor-pointer hover:bg-slate-50">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-indigo-600 mt-0.5" />
                <Upload className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Save to Microsoft Teams</p>
                  <p className="text-xs text-slate-500">
                    Auto-save to Teams / Contracts / 2026 / {form.eventName || "Event Name"}
                  </p>
                </div>
              </label>
              <label className="flex items-start gap-3 rounded-lg border p-3 cursor-pointer hover:bg-slate-50">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-indigo-600 mt-0.5" />
                <FileText className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Create DocuSign Draft</p>
                  <p className="text-xs text-slate-500">
                    Generate a draft envelope for e-signature (review before sending)
                  </p>
                </div>
              </label>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        {currentStep > 1 ? (
          <Button variant="outline" onClick={() => setCurrentStep((s) => s - 1)}>
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
        ) : (
          <div />
        )}
        {currentStep < 4 ? (
          <Button onClick={() => setCurrentStep((s) => s + 1)}>
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={() => setIsSuccess(true)} className="bg-emerald-600 hover:bg-emerald-700">
            <Check className="h-4 w-4" />
            Generate Contract
          </Button>
        )}
      </div>
    </div>
  );
}
