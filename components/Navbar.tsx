"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#1f1f21] bg-[#080808]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-white"
        >
          She<span className="text-[#00D084]">Debugs</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="#about"
            className="text-sm text-[#929292] transition hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="#services"
            className="text-sm text-[#929292] transition hover:text-white"
          >
            Services
          </Link>

          <Link
            href="/login"
            className="text-sm text-[#929292] transition hover:text-white"
          >
            Register/Login
          </Link>

          <Link
            href="#partnership"
            className="text-sm text-[#929292] transition hover:text-white"
          >
            Partnership
          </Link>

          <Link
            href="#contact"
            className="text-sm text-[#929292] transition hover:text-white"
          >
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#29292c] bg-[#111113] text-white transition hover:border-[#00D084] md:hidden"
        >
          {isOpen ? (
            /* X icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#1f1f21] bg-[#080808] md:hidden">

          <div className="mx-auto max-w-7xl px-6 py-5">

            <div className="flex flex-col">

              <Link
                href="#about"
                onClick={closeMenu}
                className="border-b border-[#1f1f21] py-4 text-sm text-[#b0b0b0] transition hover:text-[#00D084]"
              >
                About Us
              </Link>

              <Link
                href="#services"
                onClick={closeMenu}
                className="border-b border-[#1f1f21] py-4 text-sm text-[#b0b0b0] transition hover:text-[#00D084]"
              >
                Services
              </Link>

              <Link
                href="/login"
                onClick={closeMenu}
                className="border-b border-[#1f1f21] py-4 text-sm text-[#b0b0b0] transition hover:text-[#00D084]"
              >
                Register/Login
              </Link>

              <Link
                href="#partnership"
                onClick={closeMenu}
                className="border-b border-[#1f1f21] py-4 text-sm text-[#b0b0b0] transition hover:text-[#00D084]"
              >
                Partnership
              </Link>

              <Link
                href="#contact"
                onClick={closeMenu}
                className="py-4 text-sm text-[#b0b0b0] transition hover:text-[#00D084]"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>
      )}
    </header>
  );
}