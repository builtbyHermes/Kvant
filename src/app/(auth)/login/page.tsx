"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function LoginPage() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    
    console.log(`${password}   and  ${email}`)
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  }

  return (
    <section className={styles.login}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Welcome back</p>

        <h1>Sign in to Kvant</h1>

        <p className={styles.description}>
          Access your dashboard and manage your business operations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          <div className={styles.passwordHeader}>
            <label htmlFor="password">Password</label>

            <Link href="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
        </div>

        {error && (
          <p className={styles.error}>
            {error}
          </p>
        )}

        <button
          type="submit"
          className={styles.submit}
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div className={styles.divider}>
        <span />
        <p>or</p>
        <span />
      </div>

      <button type="button" className={styles.googleButton}>
        <span className={styles.googleIcon}>G</span>
        Continue with Google
      </button>

      <p className={styles.register}>
        Don't have an account?{" "}
        <Link href="/register">
          Create an account
        </Link>
      </p>
    </section>
  );
}