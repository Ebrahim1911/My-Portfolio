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
                Developed a single-page application (SPA) using React and Redux.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Backend Development with Node.js: opted for Express.js, a
                popular Node.js framework, to build the project's backend.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Databases:Explore NoSQL databases like MongoDB for flexible data
                storage.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Data Modeling: Use Mongoose (for MongoDB) to simplify
                interacting with databases in Node.js.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                API Design: Understand RESTful API principles and best
                practices.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Authentication/Authorization: Implement mechanisms for user
                login, secure access control, and managing user permissions.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Authentication/Authorization: Implement mechanisms for user
                login, secure access control, and managing user permissions.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Protects Sensitive Information By storing environment variables
                like API keys, database credentials, or other sensitive data in
                a separate .env file outside your codebase.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                CORS (Cross-origin resource sharing) enabled, our frontend can
                fetch data and interact with our backend API, leading to a more
                seamless and integrated user experience.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Ensures Data Integrity leveraged Mongoose, a powerful Object
                Data Modeling (ODM) library, to define robust schemas for my
                project's data in MongoDB. These schemas enforce a consistent
                structure, significantly reducing the risk of errors by
                preventing invalid data from entering the database.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Enhanced User Security: To safeguard user data, using bcrypt, a
                robust password hashing algorithm. Bcrypt securely stores
                passwords by hashing them before saving them in the database.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
