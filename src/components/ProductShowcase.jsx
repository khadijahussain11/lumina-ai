"use client";

import { motion } from "framer-motion";
import {
  FiHome,
  FiMessageSquare,
  FiFolder,
  FiSettings,
  FiSearch,
} from "react-icons/fi";

import styles from "@/styles/ProductShowcase.module.css";

export default function ProductShowcase() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.heading}
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <span className={styles.badge}>AI Workspace</span>

        <h2>Experience the power of intelligent workflows</h2>

        <p>
          A complete AI workspace designed to help teams create, analyze and
          automate tasks faster.
        </p>
      </motion.div>

      <motion.div
        className={styles.dashboard}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        {/* Sidebar */}

        <aside className={styles.sidebar}>
          <div className={styles.logo}>✦ Lumina</div>

          <nav>
            <div className={styles.active}>
              <FiHome />
              Dashboard
            </div>

            <div>
              <FiMessageSquare />
              AI Assistant
            </div>

            <div>
              <FiFolder />
              Projects
            </div>

            <div>
              <FiSettings />
              Settings
            </div>
          </nav>
        </aside>

        {/* Main */}

        <div className={styles.main}>
          <div className={styles.topbar}>
            <h3>AI Assistant</h3>

            <div className={styles.search}>
              <FiSearch />
              Search
            </div>
          </div>

          <div className={styles.messages}>
            <div className={styles.userMessage}>
              Create a product launch strategy
            </div>

            <div className={styles.aiMessage}>
              <strong>Lumina AI</strong>

              <p>
                I created a complete launch strategy based on your target
                audience, goals and market trends.
              </p>
            </div>
          </div>

          <div className={styles.cards}>
            <div>
              <span>Productivity</span>

              <strong>+42%</strong>
            </div>

            <div>
              <span>Tasks Completed</span>

              <strong>128</strong>
            </div>

            <div>
              <span>AI Usage</span>

              <strong>89%</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
