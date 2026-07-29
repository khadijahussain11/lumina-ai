"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <div className={styles.badge}>AI workspace for modern teams</div>

        <h1>
          Build smarter
          <span>AI-powered</span>
          workflows
        </h1>

        <p>
          Lumina AI helps teams automate tasks, generate insights, and
          collaborate with intelligent AI assistants.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            Start Building
            <FiArrowRight />
          </button>

          <button className={styles.secondary}>
            <FiPlay />
            Watch Demo
          </button>
        </div>
      </motion.div>

      <motion.div
        className={styles.preview}
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className={styles.window}>
          <div className={styles.windowHeader}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.dashboard}>
            <div className={styles.sidebar}>
              <h3>Lumina</h3>

              <div className={`${styles.sidebarItem} ${styles.active}`}>
                Chat
              </div>

              <div className={styles.sidebarItem}>Agents</div>

              <div className={styles.sidebarItem}>Projects</div>

              <div className={styles.sidebarItem}>Files</div>
            </div>

            <div className={styles.chat}>
              <div className={styles.chatTitle}>AI Assistant</div>

              <div className={styles.messageUser}>Create a marketing plan</div>

              <div className={styles.messageAI}>
                <b>Lumina AI</b>
                <br />I created a strategy based on your audience, goals and
                market.
              </div>

              <div className={styles.suggestions}>
                <div className={styles.suggestion}>Generate Ideas</div>

                <div className={styles.suggestion}>Analyze Data</div>
              </div>

              <div className={styles.prompt}>
                Ask Lumina anything...
                <button>→</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
