import Image from "next/image";
import styles from "./Overview.module.css";

export default function OverView() {
  return (
    <section className={styles.integrations}>
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <h2>Engineered to scale your operations</h2>

        <p>
          Skip the painful spreadsheets. Base aggregates, tracks, and delivers
          live reports so your whole team is instantly aligned on what matters.
        </p>
      </div>

      {/* Main Content */}
      <div className={styles.contentGrid}>
        {/* LEFT COLUMN */}
        <div className={styles.leftColumn}>
          {/* Feature Card 1 */}
          <article className={styles.featureCardOne}>
            <div className={styles.cardContent}>
              <h3>Centralized Operations</h3>

              <p>
                Bring sales, inventory, and operational data together in one
                clean workspace built for fast decision making.
              </p>
            </div>

            <div className={styles.cardImageOne}>
              <Image
                src="/image-1.png"
                alt="Kvant centralized operations dashboard"
                width={500}
                height={300}
              />
            </div>
          </article>

          {/* Feature Card 2 */}
          <article className={styles.featureCardTwo}>
            <div className={styles.cardContent}>
              <h3>Real-time Insights</h3>

              <p>
                Track the metrics that matter and instantly understand how
                your business is performing.
              </p>
            </div>

            <div className={styles.cardImageTwo}>
              <Image
                src="/image-2.png"
                alt="Kvant real-time business insights"
                width={500}
                height={300}
              />
            </div>
          </article>
        </div>

        {/* RIGHT ANALYTICS CARD */}
        <article className={styles.analyticsCard}>
          <div className={styles.analyticsMeta}>
            <h3>Interactive Analytics</h3>

            <p>
              Visualize performance trends. Easily map multi-series graphs to
              make clean, data-backed operational plays.
            </p>
          </div>

          <div className={styles.analyticsImage}>
            <Image
              src="/image-3.png"
              alt="Kvant interactive analytics"
              width={500}
              height={400}
            />
          </div>
        </article>
      </div>
    </section>
  );
}