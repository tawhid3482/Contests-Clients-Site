import { Link } from "react-router-dom";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import logo from '.././assets/logo/logo.png'

const Footer = () => {
  return (
    <div className="bg-pink-200 p-10 mt-1 dark:bg-slate-700 dark:text-slate-100 text-base-content">
      <footer className="footer ">
        <aside>
          <img src={logo} className="w-60 h-32" alt="" />

          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
      <nav className="text-center mt-5">
        <header className="footer-title">Social Media</header>

        <div className="flex items-center justify-center gap-14 md:gap-20 ">
          <Link to="https://twitter.com">
            <BsTwitter className="text-3xl" />
          </Link>
          <Link to="https://www.youtube.com">
            <BsYoutube className="text-3xl" />
          </Link>
          <Link to="https://web.facebook.com">
            <FaFacebookSquare className="text-3xl" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
