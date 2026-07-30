import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://linkedin.com/company/atlas-dev", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/atlas-dev", label: "GitHub" },
  { icon: Mail, href: "mailto:contact@atlas.example", label: "Email" },
];

const FOOTER_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-6 py-12 sm:flex-row">
        <div>
          <Link href="/" className="text-lg font-semibold text-white">
            Atlas<span className="text-primary-light">.dev</span>
          </Link>
          <p className="mt-2 text-sm text-muted">
            Développement d'applications mobiles iOS & Android et intégration IA.
          </p>
        </div>

        <nav
          className="flex flex-wrap items-center gap-6"
          aria-label="Liens du pied de page"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/50 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-center text-xs text-muted">
          © {year} Atlas — Développement Mobile. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
}