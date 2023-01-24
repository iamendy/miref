import style from './Hero.module.css';
import {act} from "react-dom/test-utils";


const Hero = ({title, span, subtitle, action, image, bigImage}) => {

  return (
    <>
      <div className={`inner-width ${style.hero}`}>

        <div className="">

          <h3 className={style.title}>
            {title} <span className="text-primary">{span}</span>.
          </h3>

          <p className={style.subtext}>
            {subtitle}
          </p>

          <a href="#" className={style.getStarted}> {action} </a>
        </div>

        <div className={style.macbook}>
          <img src={image} alt="hero image"/>
        </div>

        <div className={style.bigMacbook}>
          <img src={bigImage} alt="hero image"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
