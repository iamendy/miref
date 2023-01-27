import Navbar from "./Navbar";
import Footer from "./Footer";
import {motion} from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const GuestLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}
      >

        {children}
        <Footer/>
      </motion.main>
    </>
  );
};

export default GuestLayout;
