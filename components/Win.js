import style from './Win.module.css';

const Win = () => {
  return (
    <div className={`${style.win} inner-width`}>
      <h3 className={style.title}>We win together. </h3>

      <p className={style.subtext}>Join the fastest growing community of business owners and freelance marketers.</p>
    </div>
  );
};

export default Win;
