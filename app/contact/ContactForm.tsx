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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          project_slug: data.interest,
          source_page: "/contact",
        }),
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
          Message received!
        </h3>
        <p className="text-charcoal/70 max-w-sm">
          Thank you for reaching out. We&apos;ll call you within 24 hours. You can also
          reach us directly on WhatsApp for faster response.
        </p>
      </div>
    );
  }

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

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg px-4 py-3">
          <AlertCircle size={16} />
          <span className="text-sm">Something went wrong. Please call us directly.</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full mt-2"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
