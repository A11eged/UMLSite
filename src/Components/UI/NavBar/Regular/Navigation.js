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
const navBarItems = [
  {
    title: 'Front Page',
    link: '/',
    color: ['#ff008c'],
  },
  {
    title: 'About',
    link: '/about',
    color: ['#d309e1'],
  },
  {
    title: 'News',
    link: '/News',
    color: ['#9c1aff'],
  },
  {
    title: 'Roster',
    link: '/Roster',
    color: ['#7700ff'],
  },
  {
    title: 'Contact',
    link: '/contact',
    color: ['#4400ff'],
  },
];

export const Navigation = () => (
  <motion.ul className={styles.ul} variants={variants}>
    {navBarItems.map((navBarItem, i) => {
      return (
        <MenuItem
          i={i}
          key={i}
          title={navBarItem.title}
          link={navBarItem.link}
          color={navBarItem.color}
        />
      );
    })}
  </motion.ul>
);
