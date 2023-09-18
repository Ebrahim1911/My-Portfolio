import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNav } from "../../rtk/slices/NavSlice";
function Nav() {
  const navState = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  return (
    <nav>
      <a
        href="#"
        onClick={() => dispatch(setActiveNav("#"))}
        className={navState === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => dispatch(setActiveNav("#about"))}
        className={navState === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => dispatch(setActiveNav("#experience"))}
        className={navState === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => dispatch(setActiveNav("#services"))}
        className={navState === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => dispatch(setActiveNav("#contact"))}
        className={navState === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
