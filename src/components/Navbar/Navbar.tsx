import styles from "./Navbar.module.css"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandLogo}>
        Kvant
      </div>

      <div className={styles.navLinks}>
        <a href="#features">Features</a>
        <a href="#integrations">Integrations</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </div>

      <Link
        href="/login"
        className={styles.loginButton}
      >
        Login
      </Link>
      
    </nav>
  );
}