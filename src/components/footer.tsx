import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold font-headline">SheDebugs</p>
            <p className="text-sm text-muted-foreground">Crafting Digital Excellence</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Samukerr" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://wa.me/27665789659" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.57-.02.68-.09.15-.24.21-.49.33-.25.13-.56.2-1.03.11-.47-.09-1.03-.31-1.5-.56-.91-.5-1.62-1.15-2.2-1.89-.48-.6-.82-1.28-.97-1.53-.15-.25-.3-.49-.29-.63.01-.14.2-.28.34-.42.14-.14.28-.31.38-.49.1-.18.12-.28.08-.44-.04-.16-.38-1.25-.52-1.7-.14-.45-.28-.38-.38-.38-.1-.01-.26-.01-.42-.01-.16 0-.42.06-.62.31-.2.25-.78.74-1.02 1.76-.24 1.02-.27 1.88.08 2.82.35.94 1.15 2.24 2.59 3.54 1.84 1.63 3.32 2.33 4.41 2.76.55.21 1.09.26 1.62.2.58-.06 1.54-.62 1.77-1.18.23-.56.23-1.04.16-1.15-.07-.11-.25-.17-.5-.3Z"/>
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18.2a8.2 8.2 0 1 1 8.2-8.2A8.21 8.21 0 0 1 12 20.2Z"/>
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/gugulethu-phaladi/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SheDebugs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
