import Sidebar from "@/components/Sidebar/Sidebar";
import AppHeader from "@/components/AppHeader/AppHeader";
import styles from "./layout.module.css";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.shell}>
      <Sidebar />

      <div className={styles.main}>
        <AppHeader />

        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}