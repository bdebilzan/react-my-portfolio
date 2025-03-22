import "../styles/Hero.css";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../assets/bw-circle-cropped-2.png";

function HeroLeft() {
  return (
    <div className="card hero-left">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="hero-content">
        <h3>Hi, I'm Bryce DeBilzan</h3>
        <p>
          <ReactTyped
            strings={[
              "Software Engineer",
              "Front-End Developer",
              "UI/UX Enthusiast",
              "React.js Engineer",
            ]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </p>
        <div className="social-links">
          <a
            href="https://github.com/bdebilzan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/bdebilzan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
