import Link from "next/link";
import { useRouter } from "next/router";
import { HeartFill } from "react-bootstrap-icons";

export interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function NavItem({ href, icon, label }: NavItemProps) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`flex flex-col items-center hover:text-slate-200 hover:scale-105 transition ${
          router.pathname === href ? "text-cyan-200 scale-105" : ""
        }`}
      >
        {icon}
        {label}
      </a>
    </Link>
  );
}
