import Hero from "@/features/home/Hero/Hero";
import Pricing from "@/features/home/Pricing/Pricing";
import FAQ from "@/features/home/FAQ/FAQ";
import OverView from "@/features/home/Overview/Overview";
import Brands from "@/features/home/Brands/Brands";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Hero />

      <Brands />

      <div className={styles.sections}>
        <OverView />
        <Pricing />
        <FAQ />
      </div>
    </main>
  );
}