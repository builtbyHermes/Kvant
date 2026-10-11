"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        if (!name || !email || !password || !confirmPassword) {
          setError("Please fill in all fields.");
          return;
        }

        if (password.length < 8) {
          setError("Password must be at least 8 characters.");
          return;
        }

        if (password !== confirmPassword) {
          setError("Passwords do not match.");
          return;
        }

        setIsLoading(true);

        try {
          const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            setError(data.message || "Registration failed.");
            return;
          }

          router.push("/login");
        } catch {
          setError("Unable to connect to the server. Please try again.");
        } finally {
          setIsLoading(false);
        }
      }

  return (
    <section className={styles.register}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Get started</p>

        <h1>Create your account</h1>

        <p className={styles.description}>
          Create your Kvant account and start managing your
          business from one place.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Full name</label>

          <input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
          />
        </div>

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
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="confirm-password">
            Confirm password
          </label>

          <input
            id="confirm-password"
            type="password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            autoComplete="new-password"
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
          {isLoading ? "Creating account..." : "Create account"}
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

      <p className={styles.login}>
        Already have an account?{" "}
        <Link href="/login">
          Sign in
        </Link>
      </p>
    </section>
  );
}