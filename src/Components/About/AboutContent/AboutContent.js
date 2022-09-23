import React from 'react';
import styles from './AboutContent.module.css';
import { Grid } from '@mui/material';
import Who from './Who';

const AboutContent = () => {
  return (
    <div className={`${styles.aboutContent}`}>
      <Who />
    </div>
  );
};

export default AboutContent;
