"use client";

import { useEffect, useRef } from "react";

import styles from "./Hero.module.css";

const brands = ["Figma", "Stripe", "Linear", "Attio", "Slack", "Revolut"];
const PARTICLE_COUNT = 90;

type Particle = {
  element: HTMLSpanElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  distance: number;
  orbitSpeed: number;
  driftX: number;
  driftY: number;
  size: number;
  delay: number;
  attraction: number;
};

export default function Hero() {
  const homePageRef = useRef<HTMLElement | null>(null);
  const particleFieldRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const mouseRef = useRef({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const homePage = homePageRef.current;
    const particleField = particleFieldRef.current;

    if (!homePage || !particleField) return;

    const particles: Particle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const particle = document.createElement("span");
      particle.className = styles.particle;

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 110;
      const size = Math.random() * 2.2 + 1.2;

      const particleData: Particle = {
        element: particle,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        angle,
        distance,
        orbitSpeed: (Math.random() - 0.5) * 0.018,
        driftX: (Math.random() - 0.5) * 0.15,
        driftY: (Math.random() - 0.5) * 0.15,
        size,
        delay: Math.random() * 100,
        attraction: 0.008 + Math.random() * 0.012,
      };

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particleField.appendChild(particle);
      particles.push(particleData);
    }

    particlesRef.current = particles;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = homePage.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    homePage.addEventListener("mousemove", handleMouseMove);
    homePage.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const mouse = mouseRef.current;

      particles.forEach((particle) => {
        if (!mouse.active) {
          particle.element.style.opacity = "0";
          return;
        }

        particle.angle += particle.orbitSpeed;

        const targetX =
          mouse.x +
          Math.cos(particle.angle + particle.delay) * particle.distance +
          Math.sin(particle.angle * 1.7) * 8;

        const targetY =
          mouse.y +
          Math.sin(particle.angle + particle.delay) * particle.distance +
          Math.cos(particle.angle * 1.4) * 8;

        const dx = targetX - particle.x;
        const dy = targetY - particle.y;

        particle.vx += dx * particle.attraction;
        particle.vy += dy * particle.attraction;

        particle.vx += particle.driftX * 0.01;
        particle.vy += particle.driftY * 0.01;

        particle.vx *= 0.91;
        particle.vy *= 0.91;

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0)`;

        const opacity =
          0.25 + Math.abs(Math.sin(particle.angle * 2 + particle.delay)) * 0.55;

        particle.element.style.opacity = `${opacity}`;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      homePage.removeEventListener("mousemove", handleMouseMove);
      homePage.removeEventListener("mouseleave", handleMouseLeave);

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      particles.forEach((particle) => {
        particle.element.remove();
      });

      particlesRef.current = [];
    };
  }, []);

  return (
    <section ref={homePageRef} className={styles.homePage}>
      {/* Hero Background */}
      <div className={styles.heroImage} />

      {/* Cursor Pollen / Plasma Particles */}
      <div
        ref={particleFieldRef}
        className={styles.particleField}
        aria-hidden="true"
      />

      {/* Navbar Component */}
     

      {/* Hero Main Header */}
      <div className={styles.heroMainHeader}>
        <div className={styles.badge}>All-in-one Business Dashboard</div>

        <h1>Manage sales, stock, and analytics in one clean space</h1>

        <p>
          Kvant translates complex business metrics into intuitive real-time
          visualizations. Empower your operations with a UI crafted for
          lightning-fast decision making.
        </p>
      </div>

      {/* Hero CTAs */}
      <div className={styles.heroCtas}>
        <button type="button" className={styles.primaryButton}>
          <span>Get Started Now</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3.333 8H12.667M12.667 8L8.667 4M12.667 8L8.667 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button type="button" className={styles.secondaryButton}>
          Book a Demo
        </button>
      </div>

      {/* Logos Strip */}
      <section className={styles.logosStrip}>
        <p className={styles.trustedTitle}>TRUSTED BY LEADING TEAMS WORLDWIDE</p>

        <div className={styles.logosRow}>
          <div className={styles.logosTrack}>
            <div className={styles.logoGroup}>
              {brands.map((brand) => (
                <div className={styles.logo} key={brand}>
                  {brand}
                </div>
              ))}
            </div>

            <div className={styles.logoGroup} aria-hidden="true">
              {brands.map((brand) => (
                <div className={styles.logo} key={`duplicate-${brand}`}>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}