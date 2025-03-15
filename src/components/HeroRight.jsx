import "../styles/HeroRight.css";

function HeroRight() {
  return (
    <div className="card hero-right">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer, most recently specializing in React.js and
        modern UI/UX. Based in San Diego, I create sleek, user-friendly
        applications.
      </p>
      <div className="contact">
        <h2>Let's Connect</h2>
        <div className="contact-details">
          <p>📍 San Diego, CA</p>
          <p>📞 (949) 525-8763</p>
          <p>
            ✉️ <a href="mailto:bdebilzan@mac.com">bdebilzan@mac.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroRight;
