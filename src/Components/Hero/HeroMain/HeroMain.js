import React from 'react';
import styles from './HeroMain.module.css';
import ChevronDown from '../../Images/chevrondown';
import HeroHeadings from './HeroHeadings';
import { Breakpoint } from 'react-socks';

import { HashLink } from 'react-router-hash-link';

const HeroMain = () => {
  return (
    <div className={`${styles.hero} ${styles.tint}`}>
      <HeroHeadings></HeroHeadings>
      <HashLink to="/#content">
        <ChevronDown width={50} height={50} fill={'#f6f8fa'} />
      </HashLink>
    </div>
  );
};

export default HeroMain;
