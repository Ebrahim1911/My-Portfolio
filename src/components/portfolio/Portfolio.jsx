import "./portfolio.css";
import { data } from "../../data";
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map((data) => {
          return (
            <article className="portfolio-item" key={data.id}>
              <div className="portfolio-item-image">
                <img src={data.image} alt="" />
              </div>
              <h3>{data.title}</h3>
              <h5>{data.Kind}</h5>
              <div className="portfolio-item-cta">
                <a href={data.github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={data.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
