import { notFound } from "next/navigation";
import { getCustomerById } from "@/data/customers";
import styles from "./page.module.css";

type CustomerPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CustomerPage({
  params,
}: CustomerPageProps) {
  const { id } = await params;

  const customer = await getCustomerById(Number(id));

  if (!customer) {
    notFound();
  }

  return (
    <div className={styles.customer}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Customer</p>

          <h2>{customer.name}</h2>

          <p className={styles.description}>
            View customer information and account activity.
          </p>
        </div>
      </div>

      <section className={styles.customerCard}>
        <div className={styles.detail}>
          <span>Name</span>
          <strong>{customer.name}</strong>
        </div>

        <div className={styles.detail}>
          <span>Email</span>
          <strong>{customer.email}</strong>
        </div>

        <div className={styles.detail}>
          <span>Company</span>
          <strong>{customer.company}</strong>
        </div>

        <div className={styles.detail}>
          <span>Status</span>
          <strong>{customer.status}</strong>
        </div>

        <div className={styles.detail}>
          <span>Total spent</span>
          <strong>${customer.spent.toFixed(2)}</strong>
        </div>
      </section>
    </div>
  );
}