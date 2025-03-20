import "../styles/Education.css";
import csulaLogo from "../assets/csula-logo.png";

function Education() {
  return (
    <div className="card education">
      <h2>Education</h2>
      <div className="education-details">
        <p className="degree">🎓 B.S., Computer Science</p>
        <div className="school-info">
          <img src={csulaLogo} alt="CSULA Logo" className="csula-logo" />
          <p>California State University, Los Angeles, May 2019</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
