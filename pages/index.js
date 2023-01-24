import GuestLayout from "../components/GuestLayout";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Win from "../components/Win";
import Business from "../components/Business";
import Personal from "../components/Personal";
import Newsletter from "../components/Newsletter";
import hero from "../data/pages";

export default function Home() {

  const {home} = hero;

  return (
    <GuestLayout>
      <Hero {...home}/>
      <Partners/>
      <Win/>
      <Business/>
      <Personal/>
      <Newsletter/>

    </GuestLayout>
  )
}
