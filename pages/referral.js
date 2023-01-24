import GuestLayout from "../components/GuestLayout";
import Hero from "../components/Hero";
import hero from "../data/pages";
import Partners from "../components/Partners";

const About = () => {
  const {referral} = hero;

  return (
    <GuestLayout>
      <Hero {...referral} />
      <Partners/>
    </GuestLayout>
  );
};

export default About;
