import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>Junior Level</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>8 Completed</small>
            </article>
          </div>
          <p>
            I, Ebrahim Nasser Eldeen, possess a unique blend of scientific
            inquiry and technical aptitude. While my academic background lies in
            molecular biology, my passion for problem-solving and building
            applications led me to pursue a career shift into MERN stack
            development. This transition has allowed me to leverage my
            analytical and research skills honed in the biological sciences to
            excel in the fast-paced world of web development. Equipped with a
            strong foundation, I am currently enrolled in a 9-Month Diploma
            program in Web and User Interface Development at the Information
            Technology Institute (ITI), Smart Village Branch. This program has
            provided me with the practical skills and knowledge to develop and
            deploy web applications using the MERN stack (MongoDB, Express.js,
            React.js, and Node.js...etc). To showcase my newfound expertise, I
            have actively participated in MERN stack development projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
