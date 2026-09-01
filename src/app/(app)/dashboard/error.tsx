"use client";

import styles from "./page.module.css";

export default function DashboardError() {
  return (
    <div className={styles.dashboard}>
      <div>
        <p>Something went wrong while loading the dashboard.</p>
        <button onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    </div>
  );
}