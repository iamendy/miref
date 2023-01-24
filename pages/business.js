import GuestLayout from "../components/GuestLayout";
import Hero from "../components/Hero";
import hero from "../data/pages";
import Partners from "../components/Partners";

const About = () => {
  const {business} = hero;

  return (
    <GuestLayout>
      <Hero {...business} />
      <Partners/>
    </GuestLayout>
  );
};

export default About;
