import styles from "./page.module.css";

export default function Loading() {
  
  return (
    <div className={styles.dashboard}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Overview</p>
          <h2>Business performance</h2>
          <p className={styles.description}>
            Track your sales, customers, and business activity.
          </p>
        </div>

        <button className={styles.dateButton}>
          Last 30 days
        </button>
      </div>

      <section className={styles.statsGrid}>
        
          <article  className={styles.statCard}>
            <p>{}</p>

            <div className={styles.statBottom}>
              <strong></strong>

              <span></span>
            </div>
          </article>
       
      </section>

      <section className={styles.chartCard}>
        <div className={styles.cardHeader}>
          <div>
            <h3>Sales overview</h3>
            <p>Revenue performance over the last 30 days.</p>
          </div>

          <strong>$84,240</strong>
        </div>

        <div className={styles.chart}>
          
            <div
              
              className={styles.bar}
              style={{ height: `56%` }}
            />
          
        </div>

        <div className={styles.chartLabels}>
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </section>

      <section className={styles.ordersCard}>
        <div className={styles.cardHeader}>
          <div>
            <h3>Recent orders</h3>
            <p>Your latest customer transactions.</p>
          </div>

          <button className={styles.viewButton}>
            View all
          </button>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>Order</span>
            <span>Customer</span>
            <span>Product</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

         
            <div  className={styles.tableRow}>
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
              <span
                className={ styles.pending
                }
              >
               
              </span>
            </div>
         
        </div>
      </section>
    </div>
  );
}
