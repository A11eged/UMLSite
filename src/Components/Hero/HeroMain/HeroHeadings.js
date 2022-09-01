import React from 'react';
import styles from './HeroHeadings.module.css';

const HeroHeadings = () => {
  return (
    <div className={styles.heroHeadings}>
      <h1 className={styles.heading}>Lambda Phi Epsilon</h1>
      <h2 className={styles.subheading}>Alpha Upsilon Chapter</h2>
    </div>
  );
};

export default HeroHeadings;
