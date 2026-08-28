import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section className={styles.pricingSection} id='pricing'>
      <div className={styles.pricingContainer}>

        <div className={styles.headerArea}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Flexible Pricing</span>

            <h2>A plan for every growth stage</h2>

            <p>
              Predictable flat-rate pricing. Swap plans anytime your
              operational volume scales.
            </p>
          </div>

          <div className={styles.billingToggle}>
            <button className={styles.billingActive}>
              Monthly
            </button>

            <button className={styles.billingInactive}>
              Annually
            </button>
          </div>
        </div>

        <div className={styles.pricingGrid}>

          {/* Starter */}
          <article className={styles.priceCard}>
            <div className={styles.cardTop}>

              <div className={styles.cardMeta}>
                <h3>Starter</h3>

                <p>
                  For small operations tracking their initial sales
                  pipelines.
                </p>
              </div>

              <div className={styles.priceLine}>
                <span>$29</span>
                <small>/mo</small>
              </div>

              <div className={styles.divider} />

              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.check}>✓</span>
                  <span>Up to 5 pipelines</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>Standard stock alerts</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>7-day analytics history</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>API limits of 10k/day</span>
                </li>
              </ul>
            </div>

            <div className={styles.ctaWrap}>
              <button className={styles.ghostButton}>
                Get Started Free
              </button>
            </div>
          </article>

          {/* Growth */}
          <article className={`${styles.priceCard} ${styles.featuredCard}`}>
            <div className={styles.cardTop}>

              <div className={styles.cardMeta}>
                <h3>Growth</h3>

                <p>
                  For growing companies syncing multi-regional offices.
                </p>
              </div>

              <div className={styles.priceLine}>
                <span>$79</span>
                <small>/mo</small>
              </div>

              <div className={styles.divider} />

              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.check}>✓</span>
                  <span>Unlimited pipelines</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>Automated low-stock sync</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>Real-time interactive charts</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>API limits of 100k/day</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>Dedicated Slack support</span>
                </li>
              </ul>
            </div>

            <div className={styles.ctaWrap}>
              <button className={styles.primaryButton}>
                Start Growth Trial
              </button>
            </div>
          </article>

          {/* Enterprise */}
          <article className={styles.priceCard}>
            <div className={styles.cardTop}>

              <div className={styles.cardMeta}>
                <h3>Enterprise</h3>

                <p>
                  For demanding workloads needing high-throughput
                  pipelines.
                </p>
              </div>

              <div className={styles.priceLine}>
                <span>Custom</span>
              </div>

              <div className={styles.divider} />

              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.check}>✓</span>
                  <span>Dedicated compute instances</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>Custom model logic integration</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>SLA guarantees & direct support</span>
                </li>

                <li>
                  <span className={styles.check}>✓</span>
                  <span>Unlimited history archives</span>
                </li>
              </ul>
            </div>

            <div className={styles.ctaWrap}>
              <button className={styles.ghostButton}>
                Contact Sales
              </button>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}