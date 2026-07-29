"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

import styles from "@/styles/Pricing.module.css";

const plans = [
  {
    name: "Starter",
    price: "19",
    description: "For individuals exploring AI productivity.",
    features: [
      "AI Assistant",
      "Basic workflows",
      "5 AI projects",
      "Community support",
    ],
  },

  {
    name: "Professional",
    price: "49",
    description: "For teams building smarter workflows.",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced AI agents",
      "Unlimited projects",
      "Analytics dashboard",
      "Priority support",
    ],
  },

  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations scaling with AI.",
    features: [
      "Dedicated AI solutions",
      "Team management",
      "API access",
      "Enterprise security",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
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
        <span className={styles.badge}>Pricing</span>

        <h2>Choose the plan that fits your workflow</h2>

        <p>Start small and scale your AI workspace as your needs grow.</p>
      </motion.div>

      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${plan.popular ? styles.featured : ""}`}
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
            {plan.popular && <div className={styles.popular}>Most Popular</div>}

            <h3>{plan.name}</h3>

            <p className={styles.description}>{plan.description}</p>

            <div className={styles.price}>
              {plan.price !== "Custom" && "$"}

              {plan.price}

              {plan.price !== "Custom" && <span>/month</span>}
            </div>

            <button className={styles.button}>
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </button>

            <div className={styles.features}>
              {plan.features.map((feature, i) => (
                <div key={i}>
                  <FiCheck />

                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
