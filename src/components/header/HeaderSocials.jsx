import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/ebrahimnassereldeen/"
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
