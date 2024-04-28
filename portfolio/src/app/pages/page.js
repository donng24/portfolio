'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import styles from "./page.module.css";

const PortfolioPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();

  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ background: calculateBackgroundGradient(scrollPosition) }}
    >
      {loading ? (
        <motion.div
          className={styles.loading}
          initial={{ opacity: 1 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 1 }}
        >
          <motion.h1
            className={styles.loadingTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <div className={styles.loader}></div>
          </motion.h1>
        </motion.div>
      ) : (
        <div className={styles.parallax}>
          <section className={styles.hero}>
            <div className={styles.typingContainer}>
              <h1 className={styles.typingText}>
                Hi! My name is Don Nguyen.
              </h1>
              <h3 className={styles.typingTexth3}>Software Developer</h3>
              <h3 className={styles.typingTexth3}>"quote"???</h3>
            </div>
          </section>

          {/* Navigation */}
          <nav className={styles.navigation}>
            <ul>
              <li onClick={() => router.push('/about')}>
                About Me
              </li>
              <li onClick={() => router.push('/projects')}>
                Projects
              </li>
              <li onClick={() => router.push('/resume')}>
                Resume
              </li>
              <li onClick={() => router.push('/contact')}>
                Contact Me
              </li>
            </ul>
          </nav>
        </div>
      )}
    </motion.main>
  );
};

export default PortfolioPage;
