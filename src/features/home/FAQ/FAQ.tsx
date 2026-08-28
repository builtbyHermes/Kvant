import styles from './FAQ.module.css'

const faqItems = [
  {
    q: 'Is there a free trial?',
    a: 'Yes, you can access Base for free for 14 days without entering credit card details.',
  },
  {
    q: 'Can I connect my own data sources?',
    a: 'Absolutely. Base provides out-of-the-box integrations with Stripe, Shopify, PostgreSQL, and custom API setups.',
  },
  {
    q: 'What data security measures do you use?',
    a: 'We utilize banking-grade AES-256 encryption at rest and in transit, and are fully SOC2 certified.',
  },
  {
    q: 'How are low-stock notifications delivered?',
    a: 'Notifications can be instantly routed to Slack channels, Telegram groups, webhook handlers, or direct emails.',
  },
]

export default function FAQ() {
  return (
    <section className={styles.faqSection} id='faq'>
      <div className={styles.faqContainer}>
        <div className={styles.sectionHeader}>
          <h3>Frequently Asked Questions</h3>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <details
              key={item.q}
              className={styles.faqItem}
              open
            >
              <summary>{item.q}</summary>

              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}