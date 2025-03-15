import "../styles/Experience.css";
import hpLogo from "../assets/hp-logo.png";
import densoLogo from "../assets/denso-logo.png";
import laCountyLogo from "../assets/la-county-logo.png";
import kaiserLogo from "../assets/kaiser-logo.png";

function Experience() {
  return (
    <div className="card experience">
      <h2>Work Experience</h2>

      <div className="job">
        <div className="job-header">
          <img src={hpLogo} alt="HP Logo" className="company-logo" />
          <h3>Senior Software Engineer - HP</h3>
        </div>
        <p>Apr 2022 - Jul 2024</p>
        <p>
          • Developed ReactJS-driven web pages optimized for effortless
          navigation on major mobile and desktop platforms, supporting 44
          locales, and catering to an average monthly user base of 4 million.
        </p>
      </div>

      <div className="job">
        <div className="job-header">
          <img src={densoLogo} alt="DENSO Logo" className="company-logo" />
          <h3>Software Engineer - DENSO</h3>
        </div>
        <p>Nov 2019 - Apr 2022</p>
        <p>
          • Employed each process within the V-model software development
          approach to support the MovinCool web application, facilitating
          resellers in managing their portable air conditioning units.
        </p>
      </div>

      <div className="job">
        <div className="job-header">
          <img
            src={laCountyLogo}
            alt="LA County Logo"
            className="company-logo"
          />
          <h3>
            Software Developer Intern - LA County Department of Agricultural
            Commissioner / Weights & Measures
          </h3>
        </div>
        <p>Sep 2018 - May 2019</p>
        <p>
          • Used PHP, MySQL, HTML, CSS, jQuery, and AJAX to improve UX of
          current asset management system. System allows users with designated
          roles to login, view and manage assets, view and manage users, and
          logout. Consistent communication with 4 other team members, advisor,
          and liaison to manage the project.
        </p>
      </div>

      <div className="job">
        <div className="job-header">
          <img
            src={kaiserLogo}
            alt="Kaiser Permanente Logo"
            className="company-logo"
          />
          <h3>Java Developer Intern - Kaiser Permanente</h3>
        </div>
        <p>Jun 2018 - Sep 2018</p>
        <p>
          • Java development, JUnit testing, verification of server
          configurations, contribution to various documents, pair programming
          with other developers, and participation in daily scrum meetings.
        </p>
      </div>
    </div>
  );
}

export default Experience;
