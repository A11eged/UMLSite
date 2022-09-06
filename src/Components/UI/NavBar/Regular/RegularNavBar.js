import { React, useState } from 'react';
import styles from './RegularNavBar.module.css';
import RegularNavBarMenu from './RegularNavBarMenu';
import { styled } from '@mui/material/styles';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import { motion, useCycle } from 'framer-motion';

// import ContactSVG from '../NavSVG/ContactSVG';
// import HomeSVG from '../NavSVG/HomeSVG';
// import WorkSVG from '../NavSVG/WorkSVG';
// import AboutSVG from '../NavSVG/AboutSVG';

const RegularNavBar = () => {
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

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: 0 },

    // closed: { opacity: 0, x: '100%' },
  };
  const [isOpen, setIsOpen] = useCycle(false, true);
  const { height } = 1000;

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const ExpandButton = styled((props))=>(
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      custom={height}
      className={styles.RegularNavBar}
    >
      <motion.div className="background" variants={sidebar} />
      {/* <div className={styles.RegularNavBarContainer}>
        <RegularNavBarMenu items={NavBarItems}></RegularNavBarMenu>
      </div> */}
      <Navigation />
      <MenuToggle toggle={() => setIsOpen()} />
    </motion.nav>
  );
};

export default RegularNavBar;
