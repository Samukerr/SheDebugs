"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/login",
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
          data.message || "Invalid email or password."
        );
        return;
      }

      // Store JWT tokens
      localStorage.setItem(
        "accessToken",
        data.accessToken
      );

      localStorage.setItem(
        "refreshToken",
        data.refreshToken
      );

      // Login successful
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-8">

      {/* Page Container */}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">

        {/* Authentication Card */}
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-[#111113] shadow-2xl">

          <div className="grid min-h-600px md:grid-cols-2">

            {/* ================================================= */}
            {/* LEFT SIDE — LOGIN */}
            {/* ================================================= */}

            <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">

              <div className="w-full max-w-md">

                {/* Logo */}
                <div className="mb-12">
                  <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white"
                  >
                    She
                    <span className="text-pink-500">
                      Debugs
                    </span>
                  </Link>
                </div>

                {/* Heading */}
                <div className="mb-8">

                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Welcome back
                  </h1>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    Sign in to your SheDebugs account.
                  </p>

                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                {/* Login Form */}
                <form
                  onSubmit={handleLogin}
                  className="space-y-6"
                >

                  {/* Email */}
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
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      required
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                    />
                  </div>

                  {/* Password */}
                  <div>

                    <div className="mb-2 flex items-center justify-between">

                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-zinc-300"
                      >
                        Password
                      </label>

                      <Link
                        href="/forgot-password"
                        className="text-xs text-zinc-500 transition hover:text-pink-400"
                      >
                        Forgot password?
                      </Link>

                    </div>

                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      required
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                    />

                  </div>

                  {/* Sign In Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-pink-600 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>

                </form>

                {/* Mobile Register Link */}
                <div className="mt-8 text-center text-sm text-zinc-500 md:hidden">

                  Don't have an account?{" "}

                  <Link
                    href="/register"
                    className="font-medium text-pink-500 hover:text-pink-400 hover:underline"
                  >
                    Sign up
                  </Link>

                </div>

              </div>

            </section>


            {/* ================================================= */}
            {/* RIGHT SIDE — SIGN UP */}
            {/* ================================================= */}

            <section className="relative hidden overflow-hidden border-l border-zinc-800 bg-[#0d0d0f] md:flex">

              {/* Decorative Pink Glow */}
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-pink-500/5 blur-3xl" />

              {/* Content */}
              <div className="relative flex w-full items-center justify-center px-10 lg:px-16">

                <div className="max-w-sm">

                  {/* Small Badge */}
                  <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs text-zinc-400">

                    <span className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />

                    Join the SheDebugs community

                  </div>

                  {/* Heading */}
                  <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">

                    Build.
                    <br />

                    Connect.
                    <br />

                    <span className="text-pink-500">
                      Grow.
                    </span>

                  </h2>

                  {/* Description */}
                  <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">

                    Connect with opportunities, develop
                    digital solutions, and grow through
                    technology-driven skills development.

                  </p>

                  {/* Divider */}
                  <div className="my-8 h-px w-full bg-zinc-800" />

                  {/* Sign Up */}
                  <p className="text-sm text-zinc-500">
                    Don't have an account?
                  </p>

                  <Link
                    href="/register"
                    className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-transparent px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]"
                  >
                    Create an account
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