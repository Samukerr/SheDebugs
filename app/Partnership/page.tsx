"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  ArrowRight,
  Users,
  Search,
  UserCheck,
  BriefcaseBusiness,
  Handshake,
  Code2,
} from "lucide-react";

export default function PartnershipPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-poppins">


      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            She<span className="text-pink-400">Debugs</span>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-70 flex h-10 w-10 items-center justify-center text-zinc-300 transition hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">

              <span
                className={`block h-0.5 w-7 bg-current transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`my-1.5 block h-0.5 w-7 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-7 bg-current transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />

            </div>
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu */}
          <div className="fixed right-4 top-20 z-50 w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">

            <nav className="flex flex-col py-3">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/Partnership"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-pink-400 transition-colors hover:bg-zinc-900"
              >
                Partnership
              </Link>

              <Link
                href="/Talent"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-pink-400"
              >
                Talent
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-pink-400"
              >
                Contact Us
              </Link>

              {/* Divider */}
              <div className="mx-6 my-2 border-t border-zinc-800" />

              {/* Sign In */}
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="mx-4 rounded-xl px-5 py-3 text-center font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
              >
                Sign In
              </Link>

              {/* Get Started */}
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="mx-4 mb-2 rounded-xl bg-pink-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-pink-600"
              >
                Get Started
              </Link>

            </nav>
          </div>
        </>
      )}

      <main>

        <section className="relative overflow-hidden px-6 py-24 md:py-32">

          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-500px w-500px -translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]" />

          <div className="relative mx-auto max-w-5xl text-center">

            <p className="mb-5 text-sm font-semibold uppercase tracking-0.3em text-pink-400">
              Partnership Network
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
              Connecting
              <span className="block bg-linear-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Talent With Opportunity.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
              SheDebugs bridges the gap between organisations searching for
              emerging talent and institutions developing the next generation
              of technology professionals.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
              We build partnerships that make it easier for companies to
              access skilled students and graduates while creating more
              pathways into the technology industry.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="#companies"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                I Need Talent
                <ArrowRight size={17} />
              </a>

              <a
                href="#talent-partners"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-pink-400 hover:text-pink-400"
              >
                I Have Talent
              </a>

            </div>

          </div>
        </section>

        {/* PARTNERSHIP MODEL */}

        <section className="border-y border-zinc-900 bg-zinc-900/20 px-6 py-20 md:py-28">

          <div className="mx-auto max-w-6xl">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <p className="mb-4 text-sm font-semibold uppercase tracking-0.25em text-pink-400">
                Our Partnership Model
              </p>

              <h2 className="text-3xl font-bold text-white md:text-5xl">
                One Network.
                <span className="block text-zinc-500">
                  Two Sides. One Connection.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                We connect organisations that need emerging talent with
                organisations that develop it.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {/* Companies */}
              <div
                id="companies"
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-pink-500/40"
              >

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
                  <Building2 size={28} />
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                  Partner Type 01
                </p>

                <h3 className="text-2xl font-bold text-white">
                  Companies & Organisations
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  Organisations looking for students, graduates, interns,
                  junior professionals or technical talent can partner with
                  SheDebugs to access our talent network.
                </p>

                <ul className="mt-7 space-y-3 text-sm text-zinc-300">
                  <li>- Internship placements</li>
                  <li>- Graduate opportunities</li>
                  <li>- Junior technology talent</li>
                  <li>- Software development talent</li>
                  <li>- IT & technical professionals</li>
                </ul>

              </div>

              {/* SheDebugs */}
              <div className="relative rounded-3xl border border-pink-500/40 bg-pink-500/5 p-8 shadow-[0_0_60px_rgba(236,72,153,0.08)]">

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pink-500 px-4 py-1 text-xs font-bold text-white">
                  THE BRIDGE
                </div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500 text-white">
                  <Handshake size={28} />
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                  SheDebugs
                </p>

                <h3 className="text-2xl font-bold text-white">
                  Talent Connector
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  We understand the organisation's requirements, identify
                  suitable talent within our partner network and facilitate
                  the connection between both sides.
                </p>

                <div className="mt-7 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-center">

                  <p className="text-sm font-semibold text-pink-400">
                    Company
                  </p>

                  <p className="my-2 text-zinc-600">
                    ↓
                  </p>

                  <p className="font-semibold text-white">
                    SheDebugs
                  </p>

                  <p className="my-2 text-zinc-600">
                    ↓
                  </p>

                  <p className="text-sm font-semibold text-purple-400">
                    Talent Partner
                  </p>

                </div>

              </div>

              {/* Talent Partners */}
              <div
                id="talent-partners"
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-purple-500/40"
              >

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                  <GraduationCap size={28} />
                </div>

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                  Partner Type 02
                </p>

                <h3 className="text-2xl font-bold text-white">
                  Talent-Producing Entities
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  Institutions and organisations that develop technology
                  talent can partner with us to create more opportunities
                  for their students and graduates.
                </p>

                <ul className="mt-7 space-y-3 text-sm text-zinc-300">
                  <li>- Universities</li>
                  <li>- TVET colleges</li>
                  <li>- Coding academies</li>
                  <li>- Training providers</li>
                  <li>- Youth development organisations</li>
                </ul>

              </div>

            </div>

          </div>
        </section>

        <section className="px-6 py-20 md:py-28">

          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                A Real-World Example
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Your talent request
                <span className="block text-zinc-500">
                  becomes our search.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Instead of contacting multiple institutions to find the right
                candidates, organisations can come to SheDebugs with a clear
                talent requirement.
              </p>

              <p className="mt-5 leading-8 text-zinc-400">
                We then use our network of talent-producing partners to
                identify candidates who match the opportunity.
              </p>

            </div>

            {/* Request Card */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

                {/* Request */}
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                    <Building2 size={24} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Company Request
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Talent Requirement
                    </p>
                  </div>

                </div>

                <div className="mt-6 rounded-2xl border border-zinc-800 p-5">

                  <p className="text-sm text-zinc-500">
                    We need:
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    5 Software Development Interns
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-zinc-400">
                    <p>
                      <span className="text-zinc-500">Skills:</span>{" "}
                      JavaScript, React, Git
                    </p>

                    <p>
                      <span className="text-zinc-500">Level:</span>{" "}
                      Final-year students / Graduates
                    </p>

                    <p>
                      <span className="text-zinc-500">Opportunity:</span>{" "}
                      Internship
                    </p>
                  </div>

                </div>

                {/* Arrow */}
                <div className="flex justify-center py-5 text-pink-400">
                  <ArrowRight className="rotate-90" size={22} />
                </div>

                {/* SheDebugs */}
                <div className="rounded-2xl bg-pink-500/10 p-5 text-center">

                  <p className="font-semibold text-pink-400">
                    SheDebugs Talent Network
                  </p>

                  <p className="mt-2 text-xs leading-6 text-zinc-400">
                    Matching the requirement with suitable talent-producing
                    partners.
                  </p>

                </div>

                {/* Arrow */}
                <div className="flex justify-center py-5 text-pink-400">
                  <ArrowRight className="rotate-90" size={22} />
                </div>

                {/* Result */}
                <div className="rounded-2xl border border-zinc-800 p-5 text-center">

                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Result
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Suitable candidates identified
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="border-y border-zinc-900 bg-zinc-900/20 px-6 py-20 md:py-28">

          <div className="mx-auto max-w-6xl">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                The Process
              </p>

              <h2 className="text-3xl font-bold text-white md:text-5xl">
                How the partnership works.
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                A simple process designed to make talent discovery easier for
                organisations and create more opportunities for emerging
                professionals.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  number: "01",
                  icon: BriefcaseBusiness,
                  title: "Submit a Request",
                  text: "A company tells us what type of talent they need, how many people they need and what skills are required.",
                },
                {
                  number: "02",
                  icon: Search,
                  title: "Define Requirements",
                  text: "We clarify the role, skills, experience level, duration and other requirements.",
                },
                {
                  number: "03",
                  icon: Users,
                  title: "Reach Our Network",
                  text: "We connect with relevant universities, colleges, academies and other talent-producing partners.",
                },
                {
                  number: "04",
                  icon: UserCheck,
                  title: "Match Candidates",
                  text: "Suitable students and graduates are identified based on the organisation's requirements.",
                },
                {
                  number: "05",
                  icon: Code2,
                  title: "Present Talent",
                  text: "Relevant candidates are presented to the organisation for consideration.",
                },
                {
                  number: "06",
                  icon: Handshake,
                  title: "Opportunity Begins",
                  text: "The organisation proceeds with its appropriate recruitment, internship or placement process.",
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-pink-500/40"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-2xl font-bold text-pink-400">
                        {step.number}
                      </span>

                      <Icon
                        size={25}
                        className="text-zinc-600"
                      />

                    </div>

                    <h3 className="mt-7 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {step.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        <section className="px-6 py-20 md:py-28">

          <div className="mx-auto max-w-6xl">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Why Partner With Us
              </p>

              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Built for both sides of the
                <span className="block text-zinc-500">
                  talent ecosystem.
                </span>
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {/* Companies */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">

                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
                  <Building2 size={25} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  For Companies
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Access emerging technology talent through one connected
                  network.
                </p>

                <ul className="mt-7 space-y-4 text-sm text-zinc-300">
                  <li>- Reduce time spent searching for candidates</li>
                  <li>- Access multiple talent-producing institutions</li>
                  <li>- Discover emerging technology professionals</li>
                  <li>- Build stronger graduate talent pipelines</li>
                  <li>- Support youth employment and skills development</li>
                </ul>

              </div>

              {/* Talent Partners */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">

                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                  <GraduationCap size={25} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  For Talent Partners
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  Give your students and graduates access to more real-world
                  opportunities.
                </p>

                <ul className="mt-7 space-y-4 text-sm text-zinc-300">
                  <li>- Create additional pathways to employment</li>
                  <li>- Increase industry exposure for graduates</li>
                  <li>- Connect talent with relevant opportunities</li>
                  <li>- Strengthen industry partnerships</li>
                  <li>- Improve graduate placement opportunities</li>
                </ul>

              </div>

            </div>

          </div>

        </section>

        <section className="px-6 pb-24 pt-10 md:pb-32">

          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-zinc-800 bg-linear-to-br from-pink-500/10 via-zinc-900 to-purple-500/10 px-8 py-16 text-center md:px-16">

            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-500/10 blur-[100px]" />

            <div className="relative">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Let's Build Together
              </p>

              <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white md:text-5xl">
                Ready to connect talent
                <span className="block text-zinc-500">
                  with opportunity?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
                Whether you're looking for emerging technology professionals
                or an organisation developing the next generation of talent,
                we'd love to work with you.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Request Talent
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-pink-400 hover:text-pink-400"
                >
                  Become a Partner
                  <Handshake size={17} />
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      <footer className="border-t border-zinc-900 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} SheDebugs. All rights reserved.
          </p>

          <p>
            Technology • Talent • Opportunity
          </p>

        </div>

      </footer>

    </div>
  );
}