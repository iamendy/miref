import React from 'react';
import style from './AboutMiref.module.css';


const AboutMiref = () => {
  return (
    <section className={`${style.about} inner-width`}>
      <div className="space-y-5 mb-7 md:w-[50%]">
        <h3 className={style.title}>About Miref</h3>

        <p className={style.subtext}>
          Miref is a product of Design ideation, created to build a strong community of freelance marketers and service
          providers/ small business owners, collaborating for the benefit of everyone.
        </p>

        <p className={style.subtext}>
          Our aim is to truncate the high cost and stress involved in conventional marketing of services and products.
        </p>

        <p className={style.subtext}>
          We are achieving this by making business owners access thousands of customers referred to them directly from
          people within and outside their social circle.
        </p>

        <p className={style.subtext}>
          On the other hand, freelance marketers get rewarded instantly when they connect customers to businesses on
          Miref.
        </p>
      </div>

      <div className="grid grid-cols-4 md:w-[50%] ">
        <img src="/img/team/1.png" alt="1"/>
        <img src="/img/team/2.png" alt="2"/>
        <img src="/img/team/3.png" alt="3"/>
        <img src="/img/team/4.png" alt="4"/>
        <img src="/img/team/5.png" alt="5"/>
        <img src="/img/team/6.png" alt="6"/>
        <img src="/img/team/7.png" alt="7"/>
        <img src="/img/team/8.png" alt="8"/>
      </div>
    </section>
  );
};

export default AboutMiref;
