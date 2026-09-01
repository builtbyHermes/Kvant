import { getCustomers } from "@/data/customers";
import styles from "./page.module.css";

export default async function CustomersPage() {
  const customers = await getCustomers();

  return (
    <div className={styles.customers}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Customers</p>

          <h2>Customer management</h2>

          <p className={styles.description}>
            View your customers and monitor their activity.
          </p>
        </div>
      </div>

      <section className={styles.customersCard}>
        <div className={styles.tableHeader}>
          <span>Customer</span>
          <span>Company</span>
          <span>Status</span>
          <span>Total spent</span>
        </div>

        {customers.map((customer) => (
          <div
            key={customer.id}
            className={styles.tableRow}
          >
            <div className={styles.customer}>
              <strong>{customer.name}</strong>
              <span>{customer.email}</span>
            </div>

            <span>{customer.company}</span>

            <span
              className={
                customer.status === "Active"
                  ? styles.active
                  : styles.inactive
              }
            >
              {customer.status}
            </span>

            <span>
              ${customer.spent.toFixed(2)}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}