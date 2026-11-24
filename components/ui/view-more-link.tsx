import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ViewMoreLinkProps {
  href: string;
  ariaLabel: string;
}

export function ViewMoreLink({ href, ariaLabel }: ViewMoreLinkProps) {
  return (
    <Link aria-label={ariaLabel} className="view-more-link" href={href}>
      View More <ArrowUpRight aria-hidden="true" />
    </Link>
  );
}
