import style from './Business.module.css';

const Business = () => {

  return (
    <div className={style.bizWrapper}>
      <div className={`${style.business} inner-width`}>
        <div className={style.left}>
          <img src="/img/featured-icon.png" alt="featured icon" className="w-12 h-12"/>
          <h3 className={style.title}>Miref Business Account</h3>
          <p className={style.subtext}>
            Get the result that matters to your business. Enjoy multiple referrals to your business from within and
            outside your social circle.
          </p>

          <div className="pl-5 space-y-5 mt-5">
            <div className="flex justify-start items-start">
              <img src="/img/check-icon.png" alt=""/>
              <p className={style.checks}>Reduce expenses on social media ads that may not result in actual sales</p>
            </div>

            <div className="flex justify-start items-start">
              <img src="/img/check-icon.png" alt=""/>
              <p className={style.checks}>Be in full Control of what you spend on marketing, choose how much you pay your referrers and pay only for completed referrals. </p>
            </div>

            <div className="flex justify-start items-start">
              <img src="/img/check-icon.png" alt=""/>
              <p className={style.checks}> Connect your business with real people to source customers for you in and outside your social circle.</p>
            </div>
          </div>
        </div>

        <div className={style.right}>
          <img src="/img/business-preview.png" alt="business preview" className={style.dash}/>
        </div>

      </div>
    </div>
  );
};

export default Business;
