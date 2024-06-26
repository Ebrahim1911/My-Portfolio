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
              <h4>HTML5</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>CSS3</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>JavaScript (ES6+)</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4 className="small-size-front">Version Control (Git)</h4>
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
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Vite</h4>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>Mongoose</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4>RESTful APIs</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-deails-icon" />
              <h4 className="small-size-back">Database Management</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
