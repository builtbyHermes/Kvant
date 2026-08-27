import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  
  return (
    <footer className={styles.footer}>
      {/* CTA */}
      <div className={styles.footerCta}>
        <h3>Step up to a modern operational cockpit</h3>

        <p>
          Join thousands of technical business leads standardizing their
          reports.
        </p>

        <div className={styles.ctaRow}>
          <button type="button" className={styles.primaryButton}>
            Book a Call
          </button>

          <button type="button" className={styles.secondaryButton}>
            Get Started Free
          </button>
        </div>
      </div>

      {/* Footer information */}
      <div className={styles.footerMeta}>
        <div className={styles.footerBrand}>
          <div className={styles.brand}>Kvant</div>

          <p>
            The modern analytical dashboard system engineered for
            lightning-fast retail operations.
          </p>
        </div>

        <div className={styles.footerLinks}>
          {/* Product */}
          <div className={styles.linkGroup}>
            <h5>Product</h5>

            <Link href="/#features">Features</Link>
            <Link href="/#integrations">Integrations</Link>
            <Link href="/#pricing">Pricing</Link>
          </div>

          {/* Company */}
          <div className={styles.linkGroup}>
            <h5>Company</h5>

            <Link href="#">About</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
          </div>

          {/* Resources */}
          <div className={styles.linkGroup}>
            <h5>Resources</h5>

            <Link href="#">API Docs</Link>
            <Link href="#">Help Desk</Link>
            <Link href="#">Community</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}