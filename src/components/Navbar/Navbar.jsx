"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className={styles.logo}>
        <span className={styles.logoIcon}>✦</span>
        Lumina
      </div>

      <div className={styles.links}>
        <a href="#product">Product</a>

        <a href="#features">Features</a>

        <a href="#solutions">Solutions</a>

        <a href="#pricing">Pricing</a>
        <a href="contact">Demo</a>
      </div>

      <div className={styles.actions}>
        <button className={styles.login}>Login</button>

        <button className={styles.cta}>
          Start Building
          <FiArrowUpRight />
        </button>
      </div>
    </motion.nav>
  );
}
