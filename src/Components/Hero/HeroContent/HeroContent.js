import React from 'react';
import styles from './HeroContent.module.css';
import ContentHeading from './ContentHeading';
import ExecutiveBoard from './ExecutiveBoard';
import MinorBoard from './MBoard';
import MBoardHeading from './MBoardHeading';

const HeroContent = () => {
  return (
    <div className={styles.heroContent} id={'content'}>
      <ContentHeading></ContentHeading>
      <ExecutiveBoard></ExecutiveBoard>
      <MBoardHeading></MBoardHeading>
      <MinorBoard></MinorBoard>
    </div>
  );
};

export default HeroContent;
