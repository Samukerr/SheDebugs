"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      // Backend integration will be added here later.
      // For now, simulate a successful submission.

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      setSuccess(
        "Thank you for reaching out! We'll get back to you soon."
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#09090B] text-white">

      <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:px-16">

        <div className="absolute left-1/2 top-0 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-500 transition hover:text-pink-500"
          >
            ← Back to home
          </Link>

          <div className="mt-10 max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#27272A] bg-[#111113] px-4 py-2 text-xs text-zinc-400">

              <span className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />

              Get in touch

            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">

              Let's build something
              <br />

              <span className="text-pink-500">
                meaningful together.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Have a question, partnership idea, business
              opportunity, or simply want to connect? We'd
              love to hear from you.
            </p>

          </div>

        </div>

      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16">

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">


          <div className="relative overflow-hidden rounded-3xl border border-[#27272A] bg-[#111113] p-8 sm:p-10">

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative">

              <h2 className="text-2xl font-bold">
                Let's talk.
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Whether you're looking for technology
                solutions, skills development, collaboration,
                or simply want to learn more about SheDebugs,
                our team is here to help.
              </p>

              <div className="mt-10 space-y-7">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#27272A] bg-[#09090B] text-pink-500">
                    @
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-600">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      techiniquesbyher@gmail.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#27272A] bg-[#09090B] text-pink-500">
                    ◎
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-600">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      Boksburg, Gauteng, South Africa 1459
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#27272A] bg-[#09090B] text-pink-500">
                    ↗
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-600">
                      Response time
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      Usually within 1–2 business days
                    </p>
                  </div>

                </div>

              </div>


              {/* Divider */}
              <div className="my-10 h-px bg-[#27272A]" />


              {/* Closing */}
              <p className="text-sm leading-6 text-zinc-500">
                We believe great ideas start with a
                conversation.
              </p>

              <p className="mt-2 text-sm font-medium text-pink-500">
                Let's start one. ✦
              </p>

            </div>

          </div>

          <div className="rounded-3xl border border-[#27272A] bg-[#111113] p-8 sm:p-10">

            <div className="mb-8">

              <h2 className="text-2xl font-bold">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Fill in the form below and we'll get back
                to you as soon as possible.
              </p>

            </div>


            {success && (
              <div className="mb-6 rounded-xl border border-pink-500/20 bg-pink-500/10 px-4 py-3 text-sm text-pink-400">
                {success}
              </div>
            )}


            {/* Error */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#27272A] bg-[#09090B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#27272A] bg-[#09090B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                  />

                </div>

              </div>
              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to talk about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#27272A] bg-[#09090B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                />

              </div>

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell us a little more..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-xl border border-[#27272A] bg-[#09090B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-pink-600 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
              >

                {loading
                  ? "Sending message..."
                  : "Send message"}

                {!loading && (
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                )}

              </button>

            </form>

          </div>

        </div>

      </section>

      <section className="border-t border-[#27272A] px-6 py-16 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm text-zinc-500">
            Interested in what we're building?
          </p>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Explore the{" "}
            <span className="text-pink-500">
              SheDebugs
            </span>{" "}
            community.
          </h2>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center rounded-xl border border-[#3a3a3d] px-7 py-3 text-sm font-semibold text-white transition hover:border-pink-500 hover:bg-pink-500"
          >
            Learn more about us
          </Link>

        </div>

      </section>

    </main>
  );
}