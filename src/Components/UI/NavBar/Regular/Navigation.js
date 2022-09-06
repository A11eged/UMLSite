import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import styles from './RegularNavBar.module.css';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [0, 1, 2, 3, 4];
const NavBarItems = [
  {
    title: 'Home',
    link: '/#home',
    // svg: <HomeSVG />,
  },
  {
    title: 'Work',
    link: '/#work',
    // svg: <WorkSVG />,
  },
  {
    title: 'Contact',
    link: '/#contact',
    // svg: <ContactSVG />,
  },
  {
    title: 'About',
    link: '/#about',
    // svg: <AboutSVG />,
  },
];

export const Navigation = () => (
  <motion.ul className={styles.ul} variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);
