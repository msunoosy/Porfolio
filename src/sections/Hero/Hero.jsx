import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/themeContext";
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

function Hero() {
  const {theme,toggleTheme}=useTheme()
  const themeIcon =theme === 'light'? sun:moon;
  const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;
  const githubIcon=theme==='light' ?githubLight : githubDark;
  const twitterIcon=theme=='light' ?twitterLight:twitterDark;
  

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.classModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile pic of sunoos"
        ></img>
        <img className={styles.colorMode} src={themeIcon}  onClick={toggleTheme}></img>
      </div>

      <div className={styles.info}>
      <h1>Zamzamy Mohamed<br/>Sunoosy</h1>
      <h2>Full stack developer</h2>

      <span>
        <a href="https://www.linkedin.com/" target="_blank">
        <img src={linkedinIcon}></img>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
        <img src={githubIcon}></img>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
        <img src={twitterIcon}></img>
        </a>
      </span>

    <p className={styles.description}>
      with a passion for developing modern full stack web apps for commercial businesses
    </p>
    
    <a href={CV} download>
      <button className="hover">
     Resume
      </button>
    </a>
      </div>
    </section>

   
  );
}

export default Hero;
