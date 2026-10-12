import Sidebar from "@/components/Sidebar/Sidebar";
import AppHeader from "@/components/AppHeader/AppHeader";
import styles from "./layout.module.css";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user=await getCurrentUser();

  if (!user){
     redirect('/login')
  }
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