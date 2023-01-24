import Navbar from "./Navbar";
import Footer from "./Footer";

const GuestLayout = ({children}) => {
  return (
    <main>
      <Navbar/>
      {children}
      <Footer/>
    </main>
  );
};

export default GuestLayout;
