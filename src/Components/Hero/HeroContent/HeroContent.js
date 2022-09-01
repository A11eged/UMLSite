import React from 'react';
import styles from './HeroContent.module.css';
import ContentHeading from './ContentHeading';
import ExecutiveBoard from './ExecutiveBoard';

const HeroContent = () => {
  return (
    <div className={styles.heroContent} id={'content'}>
      <ContentHeading></ContentHeading>
      <ExecutiveBoard></ExecutiveBoard>
    </div>
  );
};

export default HeroContent;
