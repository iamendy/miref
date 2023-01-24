import GuestLayout from "../components/GuestLayout";
import Hero from "../components/Hero";
import hero from "../data/pages";
import Win from "../components/Win";
import AboutMiref from "../components/AboutMiref";

const About = () => {
  const {about} = hero;

  return (
    <GuestLayout>
      <Hero {...about} />
      <Win/>
      <AboutMiref/>
    </GuestLayout>
  );
};

export default About;
