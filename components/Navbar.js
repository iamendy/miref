import style from './Navbar.module.css';
import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className={`${style.navbar} inner-width`}>
        <Link className={style.bigMenuItem} passHref href="/">

            <img src="/img/miref-logo.png" alt="miref logo"/>

        </Link>

        <div className={style.bigMenuItems}>
          <Link className={`${style.bigMenuItem} ${ router.asPath === '/' ? 'active' : '' }`}  href="/">
            Home
          </Link>

          <Link className={`${style.bigMenuItem} ${ router.asPath === '/about' ? 'active' : '' }`}  href="/about">
            About Us
          </Link>

          <Link className={`${style.bigMenuItem} ${ router.asPath === '/business' ? 'active' : '' }`}  href="/business">
            For Business
          </Link>

          <Link className={`${style.bigMenuItem} ${ router.asPath === '/referral' ? 'active' : '' }`}  href="/referral">
            For Referral
          </Link>

        </div>

        <div className="flex justify-between items-center">
          <a href="#" className={style.getStarted}>
            Get Started
          </a>

          <img src="img/burger.svg" alt="burger menu" className={style.open} onClick={()=>setIsOpen(true)}/>
        </div>

      </div>
      {/*{`${style.mobileMenu} show`}*/}
      <div className={style.mobileMenu} style={{display: isOpen ? 'flex' : ''}}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className={style.close} onClick={()=>setIsOpen(false)}>
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>

        <div className={style.mobileMenuItems}>
          <Link className={`${style.mobileMenuItem} ${ router.asPath === '/' ? 'm-active' : '' }`} passHref href="/business">
            Home
          </Link>

          <Link className={`${style.mobileMenuItem} ${ router.asPath === '/about' ? 'm-active' : '' }`} passHref href="/business">
            About Us
          </Link>

          <Link className={`${style.mobileMenuItem} ${ router.asPath === '/business' ? 'm-active' : '' }`} passHref href="/business">
            For Business
          </Link>

          <Link className={`${style.mobileMenuItem} ${ router.asPath === '/referral' ? 'm-active' : '' }`} passHref href="/business">
            For Referral
          </Link>
        </div>

        <a href="#" className={style.getStartedMobile}>
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
