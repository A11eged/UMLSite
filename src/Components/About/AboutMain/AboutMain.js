import React from 'react';
import styles from './AboutMain.module.css';
import AboutHeadings from './AboutHeadings';

const AboutMain = () => {
  return (
    <div className={`${styles.aboutMain} ${styles.tint}`}>
      <AboutHeadings />
    </div>
  );
};

export default AboutMain;
