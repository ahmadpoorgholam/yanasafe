import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 YanaSafe. Open-source proof of concept.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/our-story" className="hover:text-primary transition-colors">
            Our Story
          </Link>
          <Link href="/reports" className="hover:text-primary transition-colors">
            Safety Reports
          </Link>
          <Link href="/help" className="hover:text-primary transition-colors">
            Help
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}