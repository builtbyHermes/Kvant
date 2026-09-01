import { getProducts } from "@/data/products";
import styles from "./page.module.css";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className={styles.products}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Products</p>

          <h2>Product catalog</h2>

          <p className={styles.description}>
            Manage your products and monitor their current status.
          </p>
        </div>
      </div>

      <section className={styles.productsCard}>
        <div className={styles.tableHeader}>
          <span>Product</span>
          <span>Category</span>
          <span>Price</span>
          <span>Status</span>
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className={styles.tableRow}
          >
            <span>{product.name}</span>

            <span>{product.category}</span>

            <span>
              ${product.price.toFixed(2)}
            </span>

            <span
              className={
                product.status === "Active"
                  ? styles.active
                  : styles.inactive
              }
            >
              {product.status}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}