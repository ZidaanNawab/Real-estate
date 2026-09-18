"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { Input, Textarea } from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface EnquiryFormProps {
  projectSlug?: string;
  projectName?: string;
  sourcePage: string;
}

export function EnquiryForm({
  projectName,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "redirecting">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setStatus("redirecting");

    const lines = [
      "New enquiry from website:",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      ...(projectName ? [`Project: ${projectName}`] : []),
      ...(data.message ? [`Message: ${data.message}`] : []),
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank");

    // Re-enable button after 1 second to prevent double-submission
    setTimeout(() => setStatus("idle"), 1000);
  };

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

      <Textarea
        id="message"
        label="Message (optional)"
        placeholder="Tell us your budget, preferred plot size, or any questions..."
        {...register("message")}
      />

      {status === "redirecting" && (
        <div className="flex items-center gap-2 text-green-700 bg-green-50 rounded-lg px-4 py-3">
          <MessageCircle size={16} />
          <span className="text-sm">Redirecting you to WhatsApp...</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full mt-2"
        disabled={status === "redirecting"}
      >
        {status === "redirecting" ? "Opening WhatsApp..." : "Send Enquiry on WhatsApp"}
      </Button>

      <p className="text-xs text-charcoal/40 text-center">
        No spam. We&apos;ll only contact you about your real estate query.
      </p>
    </form>
  );
}