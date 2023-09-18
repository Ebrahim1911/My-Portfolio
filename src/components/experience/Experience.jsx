import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Java Script</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Git&GitHub</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>React JS</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>React Router</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>React Redux</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Redux toolkit</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
