import styles from "./page.module.css";
import { getDashboardData } from "@/data/dashboard";

export default  async function DashboardPage() {
  
  
  // const response = await fetch("http://localhost:3000/api/dashboard");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch dashboard data");
  // }

  const dashboardData = await getDashboardData();

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
        {dashboardData.stats.map((stat:any) => (
          <article key={stat.label} className={styles.statCard}>
            <p>{stat.label}</p>

            <div className={styles.statBottom}>
              <strong>{stat.value}</strong>

              <span>{stat.change}</span>
            </div>
          </article>
        ))}
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
          {dashboardData.chart.data.map((height:any, index:any) => (
            <div
              key={index}
              className={styles.bar}
              style={{ height: `${height}%` }}
            />
          ))}
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

          {dashboardData.orders.map((order:any) => (
            <div key={order.id} className={styles.tableRow}>
              <span>{order.id}</span>
              <span>{order.customer}</span>
              <span>{order.product}</span>
              <span>{order.amount}</span>
              <span
                className={
                  order.status === "Completed"
                    ? styles.completed
                    : styles.pending
                }
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
