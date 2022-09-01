import react from 'react';
import styles from './Hero.module.css';
import HeroContent from './HeroContent/HeroContent';
import HeroMain from './HeroMain/HeroMain';

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <HeroMain></HeroMain>
      <HeroContent></HeroContent>
    </div>
  );
};

export default Hero;
