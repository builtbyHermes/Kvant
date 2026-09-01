import { notFound } from "next/navigation";
import { getProductById } from "@/data/products";
import styles from "./page.module.css";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.product}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Product</p>

          <h2>{product.name}</h2>

          <p className={styles.description}>
            View details and current information for this product.
          </p>
        </div>
      </div>

      <section className={styles.productCard}>
        <div className={styles.detail}>
          <span>Name</span>
          <strong>{product.name}</strong>
        </div>

        <div className={styles.detail}>
          <span>Category</span>
          <strong>{product.category}</strong>
        </div>

        <div className={styles.detail}>
          <span>Price</span>
          <strong>${product.price.toFixed(2)}</strong>
        </div>

        <div className={styles.detail}>
          <span>Status</span>
          <strong>{product.status}</strong>
        </div>
      </section>
    </div>
  );
}