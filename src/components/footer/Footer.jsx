import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        E.N.E
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.facebook.com/EbrahimNasserEldeen" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/Ebrahim94590831" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://github.com/Ebrahim1911" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy;Ebrahim Nasser Eldeen. All rights reserved. </small>
      </div>
    </footer>
  );
}

export default Footer;
