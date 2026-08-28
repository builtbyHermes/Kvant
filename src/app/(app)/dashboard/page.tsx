import styles from "./page.module.css";

const stats = [
  {
    label: "Total Revenue",
    value: "$84,240",
    change: "+12.5%",
  },
  {
    label: "Orders",
    value: "1,284",
    change: "+8.2%",
  },
  {
    label: "Customers",
    value: "3,842",
    change: "+14.6%",
  },
  {
    label: "Conversion Rate",
    value: "6.8%",
    change: "+2.4%",
  },
];

const orders = [
  {
    id: "#KV-1024",
    customer: "Alex Morgan",
    product: "Analytics Pro",
    amount: "$249.00",
    status: "Completed",
  },
  {
    id: "#KV-1023",
    customer: "Sarah Wilson",
    product: "Business Plan",
    amount: "$149.00",
    status: "Completed",
  },
  {
    id: "#KV-1022",
    customer: "Daniel Smith",
    product: "Analytics Pro",
    amount: "$249.00",
    status: "Pending",
  },
  {
    id: "#KV-1021",
    customer: "Emma Davis",
    product: "Starter Plan",
    amount: "$79.00",
    status: "Completed",
  },
];

const chartData = [42, 58, 48, 72, 64, 82, 76, 91, 84, 96, 88, 100];

export default function DashboardPage() {
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
        {stats.map((stat) => (
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
          {chartData.map((height, index) => (
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

          {orders.map((order) => (
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
