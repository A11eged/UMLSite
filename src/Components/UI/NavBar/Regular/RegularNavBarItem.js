import React from 'react';
import styles from './RegularNavBarItem.module.css';

const RegularNavBarItem = (props) => {
  return (
    <li className={styles.NavBarItem}>
      <a className={styles.NavBarLinks} href={props.link}>
        {props.icon} {props.title}
      </a>
    </li>
  );
};

export default RegularNavBarItem;
