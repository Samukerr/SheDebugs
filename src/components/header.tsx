'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // This NavLink is now only for the mobile sheet
  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <Link
      href={href}
      onClick={() => setIsMobileMenuOpen(false)}
      className={cn(
        "transition-colors hover:text-primary",
        pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground',
        className
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 text-primary-foreground">
          <Code2 className="h-6 w-6" />
          <span className="font-bold font-headline">SheDebugs</span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex md:items-center md:space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'transition-colors text-primary-foreground/70 hover:text-primary-foreground',
                  pathname === item.href && 'text-primary-foreground font-semibold'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center ml-4">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="secondary" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5 text-secondary-foreground" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2">
                      <Code2 className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline">SheDebugs</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-4 mt-6 text-lg">
                    {navItems.map((item) => (
                      <NavLink key={item.href} {...item} className="py-2" />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
