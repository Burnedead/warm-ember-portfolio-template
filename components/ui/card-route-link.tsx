import Link from "next/link";

interface CardRouteLinkProps {
  href: string;
  label: string;
}

export function CardRouteLink({ href, label }: CardRouteLinkProps) {
  return (
    <Link aria-label={label} className="card-route-link" href={href}>
      <span className="sr-only">{label}</span>
    </Link>
  );
}
