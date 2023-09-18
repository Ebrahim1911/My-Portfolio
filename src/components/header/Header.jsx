import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.gif";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="dynamic-txts">
          <h5>Hi, I'm</h5>
          <h1>Ebrahim Nasser Eldeen.</h1>
          <h5 className="text-light">, and I am a Front End Developer.</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
