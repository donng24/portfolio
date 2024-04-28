'use client'

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "";

const AboutMePage = () => {
  return (
    <div id="about-section" className={styles.about}>
        <><AnimatePresence>
          {showPicture && (
              <motion.div
                  key="picture"
                  className={styles.pictureContainer}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1 }}
              >
                  <img src="/profilepic.png" className={styles.picture} />
              </motion.div>
          )}
      </AnimatePresence><div>
              <h2 className={styles.aboutMeTitle}>A little about me</h2>
              <p className={`${styles.aboutMeP} ${styles.indentedText}`}>
                  I am a graduate from the University of Oklahoma and a current graduate student at the University of Colorado - Boulder. 3 years of programming experience, specifically in full-stack applications and some data analytics.
              </p>
          </div></>
    </div>
    
  );
};

export default AboutMePage;
