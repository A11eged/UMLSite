import React from 'react';
import styles from './EBoard.module.css';
import { Grid } from '@mui/material';
// Board Member Images
import kevin from '../../Images/Eboard/kphan.jpg';
import alvin from '../../Images/Eboard/alvin.jpg';
import dennis from '../../Images/Eboard/dennis.jpg';
import jeff from '../../Images/Eboard/jeff.jpg';
import midas from '../../Images/Eboard/midas.jpg';
import sigil from '../../Images/Eboard/sigil.jpg';
import victor from '../../Images/Eboard/victor.jpg';

const MBoard = () => {
  const executives = [
    {
      name: `John 'SAINT' Tran`,
      position: 'Community Service',
      image: kevin,
    },
    {
      name: `Jack 'HEIST' Liu`,
      position: 'Social',
      image: dennis,
    },
    {
      name: `Jordan 'PROTO' Lee`,
      position: 'Philanthropy',
      image: victor,
    },
    {
      name: `Wei 'STIM' Liang`,
      position: 'Alumni',
      image: victor,
    },
    {
      name: `Dennis 'SHIFT' Wu`,
      position: 'Brotherhood',
      image: sigil,
    },
    {
      name: `Steven 'ASCENT' Tan`,
      position: 'Academic',
      image: midas,
    },
    {
      name: `XinKai 'WOLF' Lin`,
      position: 'Webmaster',
      image: alvin,
    },
    {
      name: `Mon 'Relic' Sayabovorn`,
      position: 'Fundraiser',
      image: sigil,
    },
    {
      name: `Minh 'Midas' Tran`,
      position: 'Formals',
      image: midas,
    },
    {
      name: `Kevin 'Vortex' Phan`,
      position: 'Formals',
      image: jeff,
    },
    {
      name: `Dennis 'SHIFT' Wu`,
      position: 'Rush',
      image: jeff,
    },
    {
      name: `Kevin 'SigIL' Sathapornchaisit`,
      position: 'Rush',
      image: jeff,
    },
    {
      name: `John 'SAINT' Tran`,
      position: 'Historian',
      image: jeff,
    },
    {
      name: `Kevin 'SigIL' Sathapornchaisit`,
      position: 'Graphics',
      image: jeff,
    },
    {
      name: `John 'SAINT' Tran`,
      position: 'Graphics',
      image: jeff,
    },
  ];

  return (
    // Eboard Members
    <div className={styles.EBoard}>
      <Grid container columns={12} spacing={0.5} sx={{}}>
        {executives.map((executive, index) => {
          return (
            <Grid
              item
              // Take up full width on mobile
              xs={12}
              // Take up half width on desktop
              sm={5}
              md={4}
              key={index}
              justifyContent="center"
              alignItems="center"
              margin={{ xs: '1rem', sm: '1rem', md: '0rem' }}
              marginBottom={{ xs: '1rem', sm: 0, md: '1rem' }}
              className={styles.executive}
              // sx={{ minWidth: '100' }}
            >
              <Grid
                container
                rows={12}
                columns={12}
                direction={{ xs: 'column', sm: 'row', md: 'row' }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4} sm={4} md={5} className={styles.image}>
                  <img
                    className={styles.image}
                    src={executive.image}
                    alt={executive.name}
                    // change height for mobile
                    height={'100%'}
                    // height={{ xs: '100px', sm: 'auto', md: 'auto' }}
                    width={'100%'}
                  />
                </Grid>
                <Grid
                  item
                  xs={8}
                  sm={8}
                  className={styles.text}
                  direction={{ xs: 'column', s: 'column', md: 'column' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'center',
                  }}
                >
                  <div className={styles.name}>{executive.name}</div>
                  <div className={styles.position}>{executive.position}</div>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MBoard;
