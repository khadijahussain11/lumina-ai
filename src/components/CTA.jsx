"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import styles from "@/styles/CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <motion.div
        className={styles.wrapper}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className={styles.glow}></div>

        <span className={styles.badge}>Get started with Lumina</span>

        <h2>
          Build smarter workflows
          <br />
          with intelligent AI
        </h2>

        <p>
          Join teams using Lumina AI to automate tasks, discover insights, and
          create better results.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            Start Free Trial
            <FiArrowRight />
          </button>

          <button className={styles.secondary}>Book a Demo</button>
        </div>
      </motion.div>
    </section>
  );
}
