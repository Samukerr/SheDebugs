"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-white"
          >
            SheDebugs
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <Link
              href="/#about"
              className="transition-colors hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="/#services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/register"
              className="transition-colors hover:text-white"
            >
              Register/Login
            </Link>

            <Link
              href="/#partnership"
              className="transition-colors hover:text-white"
            >
              Partnership
            </Link>

            <Link
              href="/#contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-white transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 border-t border-zinc-800 pt-4 pb-2">
            <div className="flex flex-col gap-1">

              <Link
                href="/#about"
                onClick={closeMenu}
                className="px-3 py-3 text-sm text-zinc-400 rounded-lg transition-colors hover:bg-zinc-900 hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/#services"
                onClick={closeMenu}
                className="px-3 py-3 text-sm text-zinc-400 rounded-lg transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="px-3 py-3 text-sm text-zinc-400 rounded-lg transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Register / Login
              </Link>

              <Link
                href="/#partnership"
                onClick={closeMenu}
                className="px-3 py-3 text-sm text-zinc-400 rounded-lg transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Partnership
              </Link>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="px-3 py-3 text-sm text-zinc-400 rounded-lg transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Contact
              </Link>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
}