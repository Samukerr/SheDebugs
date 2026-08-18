"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";


export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    // Check passwords before sending request
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message ||
            data.error ||
            "Registration failed. Please try again."
        );
        return;
      }

      setSuccess(
        "Account created successfully! You can now sign in."
      );

      // Clear form
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error("Registration error:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080808] px-4 py-8 text-white sm:px-6 lg:px-8">

      {/* Page Container */}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">

        {/* Authentication Card */}
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-[#242426] bg-[#111113] shadow-2xl">

          <div className="grid min-h-[600px] md:grid-cols-2">

            {/* ================================================= */}
            {/* LEFT SIDE — WELCOME / LOGIN */}
            {/* ================================================= */}

            <section className="relative hidden overflow-hidden bg-[#0d0d0f] md:flex">

              {/* Decorative Glow */}
              <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#00D084]/10 blur-3xl" />

              <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#00D084]/5 blur-3xl" />

              {/* Content */}
              <div className="relative flex w-full items-center justify-center px-10 lg:px-16">

                <div className="max-w-sm">

                  {/* Logo */}
                  <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white"
                  >
                    She
                    <span className="text-[#00D084]">
                      Debugs
                    </span>
                  </Link>

                  {/* Heading */}
                  <h1 className="mt-12 text-4xl font-bold leading-tight lg:text-5xl">
                    Welcome to
                    <br />
                    <span className="text-[#00D084]">
                      SheDebugs.
                    </span>
                  </h1>

                  <p className="mt-6 text-sm leading-7 text-[#858585]">
                    Join a growing community connecting
                    talent, businesses and opportunities
                    through technology.
                  </p>

                  {/* Divider */}
                  <div className="my-8 h-px w-full bg-[#242426]" />

                  {/* Existing Account */}
                  <p className="text-sm text-[#858585]">
                    Already have an account?
                  </p>

                  <Link
                    href="/login"
                    className="mt-4 inline-flex items-center justify-center rounded-xl border border-[#3a3a3d] px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:border-[#00D084] hover:bg-[#00D084] hover:text-black"
                  >
                    Sign in
                  </Link>

                </div>

              </div>

            </section>


            {/* ================================================= */}
            {/* RIGHT SIDE — REGISTER */}
            {/* ================================================= */}

            <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">

              <div className="w-full max-w-md">

                {/* Mobile Logo */}
                <div className="mb-10 md:hidden">
                  <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white"
                  >
                    She
                    <span className="text-[#00D084]">
                      Debugs
                    </span>
                  </Link>
                </div>

                {/* Heading */}
                <div className="mb-8">

                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Create an account
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#929292]">
                    Create your SheDebugs account and
                    start connecting with opportunities.
                  </p>

                </div>

                {/* Error */}
                {error && (
                  <div className="mb-6 rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                {/* Success */}
                {success && (
                  <div className="mb-6 rounded-xl border border-[#00D084]/20 bg-[#00D084]/10 px-4 py-3 text-sm text-[#00D084]">
                    {success}
                  </div>
                )}

                {/* Registration Form */}
                <form
                  onSubmit={handleRegister}
                  className="space-y-5"
                >

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      required
                      className="w-full rounded-xl border border-[#29292c] bg-[#0b0b0c] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#666] focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084]"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Password
                    </label>

                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      required
                      className="w-full rounded-xl border border-[#29292c] bg-[#0b0b0c] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#666] focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084]"
                    />

                    <p className="mt-2 text-xs text-[#666]">
                      Password must contain at least 8
                      characters.
                    </p>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Confirm password
                    </label>

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      required
                      className="w-full rounded-xl border border-[#29292c] bg-[#0b0b0c] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#666] focus:border-[#00D084] focus:ring-1 focus:ring-[#00D084]"
                    />
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 pt-1">

                    <input
                      id="terms"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-[#333] bg-[#0b0b0c] accent-[#00D084]"
                    />

                    <label
                      htmlFor="terms"
                      className="text-xs leading-5 text-[#777]"
                    >
                      I agree to the SheDebugs{" "}
                      <span className="text-[#00D084]">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-[#00D084]">
                        Privacy Policy
                      </span>
                      .
                    </label>

                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-[#00D084] px-6 py-3.5 text-sm font-semibold text-black transition duration-200 hover:bg-[#00b873] hover:shadow-[0_0_25px_rgba(0,208,132,0.18)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading
                      ? "Creating account..."
                      : "Create account"}
                  </button>

                </form>

                {/* Mobile Login */}
                <div className="mt-8 text-center text-sm text-[#858585] md:hidden">

                  Already have an account?{" "}

                  <Link
                    href="/login"
                    className="font-medium text-[#00D084] hover:underline"
                  >
                    Sign in
                  </Link>

                </div>

              </div>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}