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
        <ul>
          <li>
            Developed responsive web pages using ReactJS, JavaScript, and
            TypeScript for printer setup and onboarding, optimized for seamless
            navigation across major mobile and desktop platforms. Supported 44
            locales and served an average monthly user base of 4 million.
          </li>
          <li>
            Integrated 4 microfrontends with a Content Management System,
            Contentstack, to enable content managers to update assets such as
            copy and images in alignment with design revisions.
          </li>
          <li>
            Utilized Splunk RUM for data analysis and bug triaging. Led the
            development of 3 custom dashboards to track errors and user
            interactions.
          </li>
          <li>
            Implemented robust unit tests with Jest to ensure code reliability
            and maintainability.
          </li>
          <li>
            Employed Agile methodologies to drive iterative and efficient
            project execution.
          </li>
          <li>
            Managed CI/CD release processes effectively using Jenkins and Azure.
          </li>
          <li>
            Performed extensive code refactoring across multiple projects to
            improve performance, code quality and readability, and reduce page
            load times.
          </li>
          <li>
            Led facilitation of new developer onboarding through comprehensive
            documentation and training, which reduced ramp-up time and enhanced
            team integration.
          </li>
        </ul>
      </div>

      <div className="job">
        <div className="job-header">
          <img src={densoLogo} alt="DENSO Logo" className="company-logo" />
          <h3>Software Engineer - DENSO</h3>
        </div>
        <p>Nov 2019 - Apr 2022</p>
        <ul>
          <li>
            Developed a web application for users to manage their portable air
            conditioners using JavaScript, HTML, and CSS. Leveraged AWS EC2, S3,
            and Amazon IAM for the web application.
          </li>
          <li>
            Built an internal tool using JavaScript, HTML, and CSS for
            administrators to update passwords for a web application. Completed
            unit testing, integration testing, and system testing of the tool.
          </li>
          <li>
            Completed design, Java development, and system testing of an
            internal tool used to import OEM data for new model years for a
            diagnostic tool for vehicles.
          </li>
          <li>
            Documented database schemas for OEM data, including ER Diagrams, by
            querying PostgreSQL and MSSQL databases. Produced other
            comprehensive documentation covering: system design, requirement
            specifications, server specifications, maintenance processes, work
            instructions, software change items, risk mitigation strategies,
            flow charts, and version control documentation.
          </li>
        </ul>
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
        <ul>
          <li>
            Used PHP, MySQL, HTML, CSS, jQuery, and AJAX to improve UX of asset
            management system. System allows users with designated roles to
            login, view and manage assets, view and manage users, and logout.
            Consistent communication with 4 other team members, advisor, and
            liaison to manage the project.
          </li>
        </ul>
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
        <ul>
          <li>
            Java development, JUnit testing, verification of server
            configurations, contribution to various documents, pair programming
            with other developers, and participation in daily scrum meetings.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
