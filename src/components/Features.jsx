"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiZap, FiBarChart2 } from "react-icons/fi";

import styles from "@/styles/Features.module.css";

const features = [
  {
    icon: <FiMessageSquare />,
    title: "AI Assistant",
    description:
      "Chat with an intelligent AI assistant that helps you generate ideas, answer questions, and solve problems faster.",
    preview: (
      <div className={styles.chatPreview}>
        <div className={styles.userMessage}>Summarize this report</div>

        <div className={styles.aiMessage}>
          Here are the key insights from your data...
        </div>
      </div>
    ),
  },

  {
    icon: <FiZap />,
    title: "Smart Automation",
    description:
      "Automate repetitive workflows and let AI handle complex tasks with powerful intelligent processes.",
    preview: (
      <div className={styles.workflowPreview}>
        <div>Trigger</div>

        <span>↓</span>

        <div className={styles.activeBox}>AI Processing</div>

        <span>↓</span>

        <div>Result</div>
      </div>
    ),
  },

  {
    icon: <FiBarChart2 />,
    title: "Advanced Insights",
    description:
      "Turn your information into meaningful insights with AI-powered analysis and smart recommendations.",
    preview: (
      <div className={styles.analyticsPreview}>
        <h4>Performance</h4>

        <strong>+32%</strong>

        <p>Growth this month</p>

        <div className={styles.chart}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
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
        transition={{
          duration: 0.6,
        }}
      >
        <span className={styles.badge}>Powerful AI capabilities</span>

        <h2>
          Everything you need
          <br />
          to work smarter with AI
        </h2>

        <p>
          Lumina AI combines intelligent assistants, automation, and insights
          into one powerful workspace.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {features.map((feature, index) => (
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
              duration: 0.6,
            }}
          >
            <div className={styles.icon}>{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            {feature.preview}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
