import styles from "./page.module.css";

export default function SettingsPage() {
  return (
    <div className={styles.settings}>
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Settings</p>

          <h2>Workspace settings</h2>

          <p className={styles.description}>
            Manage your workspace and account preferences.
          </p>
        </div>
      </div>

      <div className={styles.settingsGrid}>
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Account</h3>
            <p>Your basic account information.</p>
          </div>

          <div className={styles.setting}>
            <div>
              <span className={styles.label}>Name</span>
              <strong>John Doe</strong>
            </div>
          </div>

          <div className={styles.setting}>
            <div>
              <span className={styles.label}>Email</span>
              <strong>john@example.com</strong>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Workspace</h3>
            <p>Information about your business workspace.</p>
          </div>

          <div className={styles.setting}>
            <div>
              <span className={styles.label}>Workspace name</span>
              <strong>Kvant</strong>
            </div>
          </div>

          <div className={styles.setting}>
            <div>
              <span className={styles.label}>Plan</span>
              <strong>Professional</strong>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Preferences</h3>
            <p>Configure your dashboard preferences.</p>
          </div>

          <div className={styles.setting}>
            <div>
              <span className={styles.label}>Theme</span>
              <strong>Dark</strong>
            </div>
          </div>

          <div className={styles.setting}>
            <div>
              <span className={styles.label}>Date format</span>
              <strong>DD / MM / YYYY</strong>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}