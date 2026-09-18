"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")).optional(),
  interest: z.string().min(1, "Please select your interest"),
  message: z.string().min(10, "Please provide a brief message (minimum 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const interestOptions = [
  { value: "", label: "Select your interest" },
  { value: "wardha-road", label: "Plots in Wardha Road" },
  { value: "besa", label: "Plots in Besa" },
  { value: "mihan-corridor", label: "Plots near MIHAN" },
  { value: "shankarpur", label: "Plots in Shankarpur" },
  { value: "general", label: "General enquiry" },
];

export function ContactForm() {
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

    const interestLabel =
      interestOptions.find((o) => o.value === data.interest)?.label ?? data.interest;

    const lines = [
      "New enquiry from website:",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Project: ${interestLabel}`,
      `Message: ${data.message}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank");

    // Re-enable button after 1 second to prevent double-submission
    setTimeout(() => setStatus("idle"), 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <Input
        id="contact-name"
        label="Full Name"
        placeholder="Your full name"
        required
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        id="contact-phone"
        label="Mobile Number"
        placeholder="10-digit mobile number"
        type="tel"
        required
        maxLength={10}
        {...register("phone")}
        error={errors.phone?.message}
      />
      <Input
        id="contact-email"
        label="Email Address (optional)"
        placeholder="you@example.com"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Select
        id="contact-interest"
        label="I am interested in"
        required
        options={interestOptions}
        {...register("interest")}
        error={errors.interest?.message}
      />
      <Textarea
        id="contact-message"
        label="Message"
        placeholder="Tell us your budget, preferred plot size, or any questions you have..."
        required
        {...register("message")}
        error={errors.message?.message}
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
        {status === "redirecting" ? "Opening WhatsApp..." : "Send Message on WhatsApp"}
      </Button>
    </form>
  );
}