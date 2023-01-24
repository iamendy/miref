import style from './Partners.module.css';

const Partners = () => {
  return (
    <div className={`${style.partners} inner-width`}>
      <h3 className={`${style.title}`}>Our Partners</h3>
      <div className={style.logos}>
        <img src="/img/monify.png" alt="monify" className={style.logo} />
        <img src="/img/quickteller.png" alt="quickteller" className={style.logo} />
        <img src="/img/mastercard.png" alt="mastercard" className={style.logo} />
      </div>
    </div>
  );
};

export default Partners;
