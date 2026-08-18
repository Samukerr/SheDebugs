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
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-white"
        >
          She<span className="text-zinc-300">Debugs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <Link
            href="#about"
            className="transition-colors hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="#services"
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
            href="#partnership"
            className="transition-colors hover:text-white"
          >
            Partnership
          </Link>

          <Link
            href="#contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-zinc-400 transition hover:bg-zinc-900 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            
            <Link
              href="#about"
              onClick={closeMenu}
              className="border-b border-zinc-900 py-4 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="#services"
              onClick={closeMenu}
              className="border-b border-zinc-900 py-4 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/register"
              onClick={closeMenu}
              className="border-b border-zinc-900 py-4 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Register/Login
            </Link>

            <Link
              href="#partnership"
              onClick={closeMenu}
              className="border-b border-zinc-900 py-4 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Partnership
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="py-4 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Contact
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}