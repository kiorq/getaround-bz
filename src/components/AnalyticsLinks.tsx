"use client";

import { trackCtaClick, trackNavClick } from "@/lib/analytics";

interface CtaButtonProps {
  href: string;
  label: string;
  location: string;
  className?: string;
  children?: React.ReactNode;
}

export function CtaButton({ href, label, location, className = "", children }: CtaButtonProps) {
  return (
    <a
      href={href}
      onClick={() => trackCtaClick(label, location)}
      className={className}
    >
      {children}
    </a>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, label, children, className = "" }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={() => trackNavClick(label)}
      className={className}
    >
      {children}
    </a>
  );
}
