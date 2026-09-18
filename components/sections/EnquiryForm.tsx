"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")).optional(),
  message: z.string().optional(),
  projectSlug: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface EnquiryFormProps {
  projectSlug?: string;
  projectName?: string;
  sourcePage: string;
}

export function EnquiryForm({
  projectSlug,
  projectName,
  sourcePage,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { projectSlug: projectSlug || "" },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source_page: sourcePage }),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="font-serif text-2xl font-bold text-charcoal">
          We&apos;ll be in touch shortly!
        </h3>
        <p className="text-charcoal/70 max-w-sm">
          Thank you for your enquiry. Our team will call you within 24 hours.
          You can also reach us directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <Button variant="secondary">Open WhatsApp</Button>
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      noValidate
      aria-label="Enquiry form"
    >
      {projectName && (
        <p className="text-sm text-charcoal/60 bg-orange/5 border border-orange/20 rounded-lg px-4 py-3">
          Enquiring about: <strong className="text-charcoal">{projectName}</strong>
        </p>
      )}

      <Input
        id="name"
        label="Full Name"
        placeholder="e.g. Rajesh Sharma"
        required
        {...register("name")}
        error={errors.name?.message}
      />

      <Input
        id="phone"
        label="Mobile Number"
        placeholder="10-digit mobile number"
        type="tel"
        required
        maxLength={10}
        {...register("phone")}
        error={errors.phone?.message}
      />

      <Input
        id="email"
        label="Email Address (optional)"
        placeholder="you@example.com"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Textarea
        id="message"
        label="Message (optional)"
        placeholder="Tell us your budget, preferred plot size, or any questions..."
        {...register("message")}
      />

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg px-4 py-3">
          <AlertCircle size={16} />
          <span className="text-sm">Something went wrong. Please try again or call us directly.</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full mt-2"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </Button>

      <p className="text-xs text-charcoal/40 text-center">
        No spam. We&apos;ll only contact you about your real estate query.
      </p>
    </form>
  );
}
