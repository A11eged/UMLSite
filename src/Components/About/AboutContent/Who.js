import React from 'react';
import { Grid } from '@mui/material';
import styles from './Who.module.css';

const Who = () => {
  const subheading = 'Who Are We?';
  const text =
    'Lambda Phi Epsilon is the FIRST and ONLY internationally recognized Asian-Interest Fraternity in the country. With 60 chapters across the nation and Canada and more than 10,500 brothers strong. Lambda Phi Epsilon has, since its inception, remained the largest Asian-American interest fraternity in the United States. Lambda Phi Epsilon seeks to establish and strengthen bridges between both Greek and Asian American cultural life.';
  // const image = URL('../../../Images/crest.jpg');

  return (
    <div className={styles.who}>
      <Grid container columns={12} spacing={0.5} sx={{}}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <div className={styles.whoText}>
            <h1>{subheading}</h1>
            <p>{text}</p>
            {/* <image src={image} alt="Lambda Phi Epsilon Crest" /> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Who;
