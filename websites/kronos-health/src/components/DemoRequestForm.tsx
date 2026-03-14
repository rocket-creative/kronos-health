"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface DemoRequestFormProps {
  productLabel: string;
}

export default function DemoRequestForm({ productLabel }: DemoRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          message: formData.get("message") || `Demo request for ${productLabel}`,
          product: productLabel,
          source: "demo_request",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      setIsSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-kronos-card p-8 text-center">
        <div className="w-16 h-16 bg-kronos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-kronos-cyan" />
        </div>
        <h3 className="font-heading text-2xl text-white mb-2">Request Received</h3>
        <p className="font-body text-white/60">
          Thank you for your interest in {productLabel}. We will contact you shortly to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="demo-name" className="sr-only">
          Your Name
        </label>
        <input
          type="text"
          id="demo-name"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-kronos-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 font-body hover:border-white/20 focus:outline-none focus:border-kronos-cyan transition-colors"
        />
      </div>
      <div>
        <label htmlFor="demo-phone" className="sr-only">
          Phone Number
        </label>
        <input
          type="tel"
          id="demo-phone"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full bg-kronos-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 font-body hover:border-white/20 focus:outline-none focus:border-kronos-cyan transition-colors"
        />
      </div>
      <div>
        <label htmlFor="demo-email" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          id="demo-email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full bg-kronos-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 font-body hover:border-white/20 focus:outline-none focus:border-kronos-cyan transition-colors"
        />
      </div>
      <div>
        <label htmlFor="demo-org" className="sr-only">
          Organization / Practice Name
        </label>
        <input
          type="text"
          id="demo-org"
          name="organization"
          placeholder="Organization / Practice Name"
          required
          className="w-full bg-kronos-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 font-body hover:border-white/20 focus:outline-none focus:border-kronos-cyan transition-colors"
        />
      </div>
      <div>
        <label htmlFor="demo-message" className="sr-only">
          Message (optional)
        </label>
        <textarea
          id="demo-message"
          name="message"
          placeholder="Message (optional)"
          rows={3}
          className="w-full bg-kronos-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 font-body hover:border-white/20 focus:outline-none focus:border-kronos-cyan transition-colors resize-none"
        />
      </div>
      {error && (
        <p className="text-white/70 text-sm font-body">{error}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-kronos-cyan text-kronos-bg font-bold py-3 px-6 hover:bg-kronos-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
      >
        {isSubmitting ? "Sending..." : "Request a Demo"}
      </button>
    </form>
  );
}
