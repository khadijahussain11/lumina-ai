"use client";

import { motion } from "framer-motion";
import { FiUsers, FiEdit3, FiTrendingUp } from "react-icons/fi";

import styles from "@/styles/Solutions.module.css";

const solutions = [
  {
    icon: <FiUsers />,
    title: "For Teams",
    description:
      "Help your team collaborate better with AI assistants that organize tasks and improve productivity.",
    items: ["AI collaboration", "Workflow automation", "Team insights"],
  },

  {
    icon: <FiEdit3 />,
    title: "For Creators",
    description:
      "Generate ideas, create content, and turn concepts into reality with intelligent AI tools.",
    items: ["Content generation", "Creative assistance", "Idea exploration"],
  },

  {
    icon: <FiTrendingUp />,
    title: "For Businesses",
    description:
      "Transform your data into actionable insights and make faster business decisions.",
    items: ["Data analysis", "Smart reports", "Performance tracking"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className={styles.solutions}>
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
        <span className={styles.badge}>Solutions</span>

        <h2>AI solutions built for every workflow</h2>

        <p>
          Whether you are building products, creating content, or managing
          teams, Lumina AI adapts to your needs.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
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
            transition={{
              delay: index * 0.15,
            }}
          >
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className={styles.list}>
              {item.items.map((text, i) => (
                <div key={i}>✓ {text}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
