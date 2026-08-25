
import Link from "next/link";
import styles from "./Navbar.module.css";

const links = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brandLogo}>
        Kvant
      </Link>

      <div className={styles.navLinks}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      <Link href="/login" className={styles.loginButton}>
        Login
      </Link>
    </nav>
  );
}