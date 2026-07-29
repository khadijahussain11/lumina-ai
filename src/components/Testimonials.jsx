"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

import styles from "@/styles/Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "Nova Labs",
    text: "Lumina AI completely changed how our team manages daily workflows. We save hours every week with intelligent automation.",
    initials: "SM",
  },

  {
    name: "Daniel Carter",
    role: "Founder",
    company: "Vertex Studio",
    text: "The AI assistants help us generate ideas faster and make better decisions. It feels like having an expert teammate.",
    initials: "DC",
  },

  {
    name: "Emily Watson",
    role: "Marketing Lead",
    company: "Growthly",
    text: "Lumina AI makes analyzing data and creating strategies much easier. The interface is simple and powerful.",
    initials: "EW",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
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
        <span className={styles.badge}>Testimonials</span>

        <h2>Loved by teams building the future</h2>

        <p>
          See how modern teams use Lumina AI to improve productivity and
          creativity.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {testimonials.map((item, index) => (
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
            <div className={styles.stars}>
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>

            <p className={styles.text}>"{item.text}"</p>

            <div className={styles.user}>
              <div className={styles.avatar}>{item.initials}</div>

              <div>
                <h4>{item.name}</h4>

                <span>
                  {item.role} · {item.company}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
