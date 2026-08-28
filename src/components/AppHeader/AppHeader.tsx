import styles from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Dashboard</h1>
        <p>Overview of your business performance.</p>
      </div>

      <button className={styles.profileButton}>
        <span className={styles.avatar}>K</span>
        <span>Account</span>
      </button>
    </header>
  );
}