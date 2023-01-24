import style from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={style.newsletterWrapper}>
      <div className={`${style.newsletter} inner-width`}>
        <h3 className={style.title}> Subscribe to stay informed </h3>
        <p className={style.subtext}>Be the first to know when it’s launched</p>

        <div className={style.form}>
          <input type="text" className={style.input} placeholder="name"/>
          <input type="email" className={style.input} placeholder="email"/>
          <br/>
          <a className={style.subBtn}> Subscribe </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
