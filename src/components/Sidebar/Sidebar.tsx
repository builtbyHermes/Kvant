import Link from "next/link";
import styles from "./Sidebar.module.css";

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
  },
  {
    label: "Products",
    href: "/dashboard/products",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        Kvant
      </div>

      <nav className={styles.navigation}>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.navItem}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}