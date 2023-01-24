import style from './Personal.module.css';

const Personal = () => {

  return (
    <div className={style.bizWrapper}>
      <div className={`${style.business} inner-width`}>
        <div className={style.left}>
          <img src="/img/featured-icon.png" alt="featured icon" className="w-12 h-12"/>
          <h3 className={style.title}>Miref Personal Account</h3>
          <p className={style.subtext}>
            Everyday, we casually refer our friends, families and acquaintances to patronize businesses that we trust, Miref is here to help you earn from those referrals.
          </p>

          <div className="pl-5 space-y-5 mt-5">
            <div className="flex justify-start items-start">
              <img src="/img/check-icon.png" alt=""/>
              <p className={style.checks}>Enjoy instant earnings when you refer customer to any business on miref.</p>
            </div>

            <div className="flex justify-start items-start">
              <img src="/img/check-icon.png" alt=""/>
              <p className={style.checks}>
                Get a unique username that pays you across all businesses on Miref.
              </p>
            </div>

            <div className="flex justify-start items-start">
              <img src="/img/check-icon.png" alt=""/>
              <p className={style.checks}>
                We monetize your social referrals; you chose your own bargain.
              </p>
            </div>
          </div>
        </div>

        <div className={style.right}>
          <img src="/img/personal-preview.png" alt="business preview" className={style.dash}/>
        </div>

      </div>
    </div>
  );
};

export default Personal;
