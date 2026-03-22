import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LogoProps {
  href?: string;
  className?: string;
  spanClassName?: string;
}

export function Logo({ href, className = "", spanClassName = "" }: LogoProps) {
  const brand = (
    <span className={`font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight ${spanClassName}`}>
      {siteConfig.nameDisplay.prefix}
      <span className="text-[#a8d800]">{siteConfig.nameDisplay.suffix}</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {brand}
      </Link>
    );
  }

  return <span className={className}>{brand}</span>;
}
