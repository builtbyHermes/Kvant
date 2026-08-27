import styles from "./Brands.module.css";

const brands = [
  "Figma",
  "Stripe",
  "Linear",
  "Attio",
  "Slack",
  "Revolut",
];

export default function Brands() {
  return (
    <section className={styles.brandsSection}>
      <p className={styles.trustedTitle}>
        TRUSTED BY LEADING TEAMS WORLDWIDE
      </p>

      <div className={styles.logosRow}>
        <div className={styles.logosTrack}>
          <div className={styles.logoGroup}>
            {brands.map((brand) => (
              <div className={styles.logo} key={brand}>
                {brand}
              </div>
            ))}
          </div>

          {/* Duplicate group creates the seamless marquee */}
          <div
            className={styles.logoGroup}
            aria-hidden="true"
          >
            {brands.map((brand) => (
              <div
                className={styles.logo}
                key={`duplicate-${brand}`}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}