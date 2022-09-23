import * as React from 'react';
import { motion } from 'framer-motion';
import styles from './RegularNavBar.module.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = (props) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className={styles.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.item}>
        <Link to={props.link} style={{ textDecoration: 'none' }}>
          <div>
            <h2 className={styles.text}>{props.title}</h2>
          </div>
        </Link>
      </div>
    </motion.li>
  );
};
