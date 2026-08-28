import styles from "./layout.module.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.authPage}>
      <div className={styles.brand}>
        Kvant
      </div>

      <div className={styles.content}>
        {children}
      </div>

      <p className={styles.footer}>
        © 2026 Kvant. All rights reserved.
      </p>
    </main>
  );
}