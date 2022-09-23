import react from 'react';
import styles from './About.module.css';
import AboutContent from './AboutContent/AboutContent';
import AboutMain from './AboutMain/AboutMain';

const About = () => {
  return (
    <div className={`${styles.about}`} id="about">
      <AboutMain />
      <AboutContent />
    </div>
  );
};

export default About;
