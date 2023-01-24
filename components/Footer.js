import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`${style.footerWrapper} inner-width`}>

      <div className="xl:flex xl:justify-between xl:items-center">

        <div className={style.outro}>
          <img src="/img/miref-logo.png" alt="logo"/>
          <p>
            We win together.
          </p>
          <p className="xl:w-1/2">
            Address : Plot 1141, Cadastral Zone B07, Katampe, Abuja
          </p>
        </div>

        <div className={style.links}>
          <div>
            <h3>Features</h3>
            <a href="#" className={style.link}> Miref Business </a>
            <a href="#" className={style.link}> Miref Personal </a>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#" className={style.link}> About Us </a>
            <a href="#" className={style.link}> Careers </a>
          </div>

          <div>
            <h3>Help</h3>
            <a href="#" className={style.link}> FAQs </a>
            <a href="#" className={style.link}> Help center </a>
          </div>

          <div>
            <h3>Legal</h3>
            <a href="#" className={style.link}> Terms </a>
            <a href="#" className={style.link}> Privacy </a>
          </div>
        </div>
      </div>

      <hr className={style.hr}/>

      <div className="mt-5 sm:flex sm:justify-between">

        <div className={style.social}>
          <a href="#">
            <img src="/img/twitter.png" alt="twitter"/>
          </a>

          <a href="#">
            <img src="/img/linkedin.png" alt="twitter"/>
          </a>

          <a href="#">
            <img src="/img/facebook.png" alt="twitter"/>
          </a>
        </div>

        <p className={style.copyright}>
          2023 Miref. All rights reserved.
        </p>
      </div>


    </div>
  );
};

export default Footer;
