import { BiCheck } from "react-icons/bi";
import "./services.css";
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Front-end web development: Create responsive and user-friendly
                web applications using React, HTML, CSS, and JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Cross-browser compatibility: Ensure that your applications work
                correctly on all major browsers.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                API integration: Consume RESTful APIs to fetch and display data
                in your applications.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Version control: Use Git to track changes to your code and
                collaborate with others.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Component-based development: Build reusable and maintainable
                code using React components.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                State management: Implement state management techniques to keep
                your applications responsive and performant.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Built a responsive website using React and Bootstrap.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Integrated a React application with a third-party API.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Developed a single-page application (SPA) using React and Redux.{" "}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
