import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/ebrahim-nassereldeen-b0b8b1246/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ebrahim1911" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
