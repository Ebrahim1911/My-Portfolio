import CV from "../../assets/cv.pdf";
function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-ptimary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
