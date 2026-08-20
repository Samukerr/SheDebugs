"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Lightbulb,
  Users,
  Target,
  Heart,
  Rocket,
  BriefcaseBusiness,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-poppins">

      {/* =========================
          NAVBAR
      ========================== */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            SheDebugs
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

      {/* =========================
          NAVIGATION OVERLAY
      ========================== */}
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
                href="/"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-white transition-colors hover:bg-zinc-900"
              >
                About Us
              </Link>

              <a
                href="/#services"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-pink-400"
              >
                Services
              </a>

              <a
                href="/#partnership"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-pink-400"
              >
                Partnership
              </a>

              <a
                href="/#students"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-pink-400"
              >
                Students and Graduates
              </a>

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-pink-400"
              >
                Signin/Signup
              </Link>

              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-pink-400"
              >
                Contact Us
              </a>

            </nav>
          </div>
        </>
      )}

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main>

        {/* =========================
            HERO
        ========================== */}
        <section className="relative overflow-hidden px-6 py-24 md:py-32">

          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-500px w-500px -translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]" />

          <div className="relative mx-auto max-w-5xl text-center">

            <p className="mb-5 text-sm font-semibold uppercase tracking-0.3em text-pink-400">
              About SheDebugs
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
              Technology creates possibilities.
              <span className="block bg-linear-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                People turn them into impact.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
              SheDebugs is a technology-focused business committed to
              connecting people, technology and opportunity. We help
              organisations embrace digital solutions while creating pathways
              for emerging technology professionals to learn, grow and thrive.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="#who-we-are"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                Discover SheDebugs
                <ArrowRight size={17} />
              </a>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-pink-400 hover:text-pink-400"
              >
                Get Started
              </Link>

            </div>
          </div>
        </section>

        {/* =========================
            WHO WE ARE
        ========================== */}
        <section
          id="who-we-are"
          className="border-t border-zinc-900 px-6 py-20 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Who We Are
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Building bridges between technology and opportunity.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                SheDebugs was created with a simple belief: technology should
                create opportunities, not barriers.
              </p>

              <p>
                We operate at the intersection of technology, skills
                development and business. Our goal is to help organisations
                solve digital challenges while supporting the development of
                the next generation of technology professionals.
              </p>

              <p>
                From digital solutions and IT services to student and graduate
                development, SheDebugs is focused on creating meaningful,
                sustainable connections between talent and industry.
              </p>
            </div>

          </div>
        </section>

        {/* =========================
            MISSION & VISION
        ========================== */}
        <section className="px-6 py-20 md:py-28">

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

            {/* Mission */}
            <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-pink-500/40 md:p-10">

              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">
                <Target size={24} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                Our Mission
              </p>

              <h3 className="mb-5 text-2xl font-bold text-white">
                Turning potential into opportunity.
              </h3>

              <p className="leading-8 text-zinc-400">
                Our mission is to empower individuals and organisations
                through technology, skills development and meaningful
                opportunities. We aim to make technology more accessible while
                helping emerging professionals transition from learning into
                real-world impact.
              </p>

            </div>

            {/* Vision */}
            <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-purple-500/40 md:p-10">

              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                <Rocket size={24} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Our Vision
              </p>

              <h3 className="mb-5 text-2xl font-bold text-white">
                A future where technology creates access.
              </h3>

              <p className="leading-8 text-zinc-400">
                We envision a technology ecosystem where emerging talent has
                access to the skills, networks and opportunities needed to
                succeed, while organisations have access to capable people and
                innovative digital solutions.
              </p>

            </div>

          </div>
        </section>

        {/* =========================
            WHAT WE DO
        ========================== */}
        <section
          id="what-we-do"
          className="border-y border-zinc-900 bg-zinc-900/20 px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                What We Do
              </p>

              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Technology. Talent. Transformation.
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                We bring together technology solutions and people development
                to help organisations and emerging professionals move forward.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {/* Card 1 */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-pink-500/40">

                <Code2 className="mb-6 text-pink-400" size={30} />

                <h3 className="mb-3 text-xl font-semibold text-white">
                  Technology Solutions
                </h3>

                <p className="text-sm leading-7 text-zinc-400">
                  Digital solutions and technology services designed to help
                  organisations solve problems and improve the way they work.
                </p>

              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-purple-500/40">

                <GraduationCap className="mb-6 text-purple-400" size={30} />

                <h3 className="mb-3 text-xl font-semibold text-white">
                  Skills Development
                </h3>

                <p className="text-sm leading-7 text-zinc-400">
                  Creating pathways for students and emerging professionals to
                  develop practical technology skills.
                </p>

              </div>

              {/* Card 3 */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-pink-500/40">

                <Users className="mb-6 text-pink-400" size={30} />

                <h3 className="mb-3 text-xl font-semibold text-white">
                  Talent Development
                </h3>

                <p className="text-sm leading-7 text-zinc-400">
                  Helping emerging professionals bridge the gap between
                  academic knowledge and workplace experience.
                </p>

              </div>

              {/* Card 4 */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-purple-500/40">

                <Handshake className="mb-6 text-purple-400" size={30} />

                <h3 className="mb-3 text-xl font-semibold text-white">
                  Industry Partnerships
                </h3>

                <p className="text-sm leading-7 text-zinc-400">
                  Connecting businesses, institutions and technology talent to
                  create meaningful opportunities.
                </p>

              </div>

            </div>
          </div>
        </section>

        {/* =========================
            WHY SHEDEBUGS
        ========================== */}
        <section className="px-6 py-20 md:py-28">

          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Why SheDebugs?
              </p>

              <h2 className="text-3xl font-bold text-white md:text-5xl">
                More than technology.
                <span className="block text-zinc-500">
                  We build possibilities.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                We believe sustainable digital transformation happens when
                technology and people grow together. That is why our approach
                combines technical capability with skills development and
                opportunity creation.
              </p>

            </div>

            <div className="space-y-4">

              <div className="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <Lightbulb className="mt-1 shrink-0 text-pink-400" size={25} />

                <div>
                  <h3 className="font-semibold text-white">
                    Innovation
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    We embrace new ideas and technologies to create practical
                    solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <Heart className="mt-1 shrink-0 text-purple-400" size={25} />

                <div>
                  <h3 className="font-semibold text-white">
                    Empowerment
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    We believe in creating access and helping people realise
                    their potential.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <BriefcaseBusiness
                  className="mt-1 shrink-0 text-pink-400"
                  size={25}
                />

                <div>
                  <h3 className="font-semibold text-white">
                    Real-World Impact
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    We focus on solutions, skills and opportunities that create
                    measurable value.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================
            VALUES
        ========================== */}
        <section className="border-t border-zinc-900 px-6 py-20 md:py-28">

          <div className="mx-auto max-w-6xl">

            <div className="mb-12">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                Our Values
              </p>

              <h2 className="text-3xl font-bold text-white md:text-5xl">
                What drives us.
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-zinc-800 p-6">
                <p className="text-2xl font-bold text-pink-400">01</p>
                <h3 className="mt-5 font-semibold text-white">
                  Excellence
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  We hold ourselves to high standards in everything we create.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-6">
                <p className="text-2xl font-bold text-purple-400">02</p>
                <h3 className="mt-5 font-semibold text-white">
                  Growth
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  We continuously learn, adapt and develop.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-6">
                <p className="text-2xl font-bold text-pink-400">03</p>
                <h3 className="mt-5 font-semibold text-white">
                  Collaboration
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  We believe meaningful progress happens when people work
                  together.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-6">
                <p className="text-2xl font-bold text-purple-400">04</p>
                <h3 className="mt-5 font-semibold text-white">
                  Impact
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  We measure success by the value we create for people and
                  organisations.
                </p>
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
                Ready to build the future of technology?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
                Whether you're looking for technology solutions, talent,
                skills development or partnership opportunities, we'd love to
                connect.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Work With Us
                  <ArrowRight size={17} />
                </a>

                <a
                  href="/#partnership"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-pink-400 hover:text-pink-400"
                >
                  Become a Partner
                  <Handshake size={17} />
                </a>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* =========================
          FOOTER
      ========================== */}
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