import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

import styles from "@/styles/Footer.module.css";

const columns = [
  {
    title: "Product",
    links: ["Features", "Solutions", "Pricing", "Updates"],
  },

  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Partners"],
  },

  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Blog", "Community"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>✦ Lumina AI</div>

            <p>Build smarter workflows with intelligent AI solutions.</p>

            <div className={styles.social}>
              <FiTwitter />

              <FiLinkedin />

              <FiGithub />
            </div>
          </div>

          <div className={styles.links}>
            {columns.map((column, index) => (
              <div key={index}>
                <h4>{column.title}</h4>

                {column.links.map((link, i) => (
                  <a key={i} href="#">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Lumina AI. All rights reserved.</p>

          <div>
            <span>Privacy Policy</span>

            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
