"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ContactFormProps {
  source?: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm({ source = "contact" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validateForm(formData: FormData): FieldErrors {
    const errors: FieldErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name?.trim()) {
      errors.name = "Name is required";
    }
    if (!email?.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!message?.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const errors = validateForm(formData);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          source,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
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
        <h3 className="font-heading text-2xl text-white mb-2">Message Sent</h3>
        <p className="font-body text-white/60">
          Thank you for reaching out. We will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block font-body text-xs text-white/60 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          autoComplete="name"
          inputMode="text"
          aria-invalid={fieldErrors.name ? "true" : undefined}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          style={{ fontSize: "16px" }}
          className={`w-full h-12 bg-kronos-card border px-4 text-white placeholder:text-white/40 font-body hover:border-white/20 focus:outline-none focus:border-kronos-cyan focus:ring-2 focus:ring-kronos-cyan/50 transition-colors ${
            fieldErrors.name ? "border-red-500" : "border-white/10"
          }`}
        />
        {fieldErrors.name && (
          <p id="name-error" role="alert" className="text-red-400 text-xs mt-1">
            {fieldErrors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block font-body text-xs text-white/60 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          required
          autoComplete="email"
          inputMode="email"
          aria-invalid={fieldErrors.email ? "true" : undefined}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          style={{ fontSize: "16px" }}
          className={`w-full h-12 bg-kronos-card border px-4 text-white placeholder:text-white/40 font-body hover:border-white/20 focus:outline-none focus:border-kronos-cyan focus:ring-2 focus:ring-kronos-cyan/50 transition-colors ${
            fieldErrors.email ? "border-red-500" : "border-white/10"
          }`}
        />
        {fieldErrors.email && (
          <p id="email-error" role="alert" className="text-red-400 text-xs mt-1">
            {fieldErrors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block font-body text-xs text-white/60 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          rows={4}
          required
          aria-invalid={fieldErrors.message ? "true" : undefined}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          style={{ fontSize: "16px" }}
          className={`w-full bg-kronos-card border px-4 py-3 text-white placeholder:text-white/40 font-body hover:border-white/20 focus:outline-none focus:border-kronos-cyan focus:ring-2 focus:ring-kronos-cyan/50 transition-colors resize-none ${
            fieldErrors.message ? "border-red-500" : "border-white/10"
          }`}
        />
        {fieldErrors.message && (
          <p id="message-error" role="alert" className="text-red-400 text-xs mt-1">
            {fieldErrors.message}
          </p>
        )}
      </div>
      {error && (
        <p role="alert" className="text-red-400 text-sm font-body">{error}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] bg-kronos-cyan text-kronos-bg font-bold py-3 px-6 hover:bg-kronos-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
