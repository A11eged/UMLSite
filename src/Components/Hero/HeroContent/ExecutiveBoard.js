import React from 'react';
import styles from './EBoard.module.css';
import { Grid } from '@mui/material';
// Board Member Images
import kevin from '../../Images/Eboard/kphan.jpg';
import alvin from '../../Images/Eboard/alvin.jpg';
import dennis from '../../Images/Eboard/dennis.jpg';

const ExecutiveBoard = () => {
  const executives = [
    {
      name: `Kevin 'Vortex' Phan`,
      position: 'President',
      image: kevin,
    },
    {
      name: `Dennis 'SHIFT' Wu`,
      position: 'VP Internal',
      image: dennis,
    },
    { name: `Alvin 'Savage' Ko`, position: 'VP Judicial', image: alvin },
    { name: `Victor 'TALON' Vuong`, position: 'VP External', image: alvin },
    {
      name: `Kevin 'SigIL' Sathapornchaisit`,
      position: 'Secretary',
      image: alvin,
    },
    { name: `Kenny 'CROSS' Zhou`, position: 'Treasurer', image: alvin },
  ];

  return (
    // Eboard Members
    <div className={styles.EBoard}>
      <Grid container columns={2} spacing={2}>
        {executives.map((executive, index) => {
          return (
            <Grid
              item
              xs={1}
              sm={1}
              md={1}
              key={index}
              className={styles.executive}
            >
              <div className={styles.text}>
                <div className={styles.position}>{executive.position}</div>
                <div className={styles.name}>{executive.name}</div>
              </div>
              <img
                className={styles.image}
                src={executive.image}
                alt={executive.name}
                height={150}
                width={'auto'}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ExecutiveBoard;
