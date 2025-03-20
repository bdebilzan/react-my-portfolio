import "./styles/HeroSection.css";
import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import SpaceBackground from "./components/SpaceBackground";
import "./App.css";
import "./styles/global.css";

function App() {
  return (
    <div className="app relative">
      <SpaceBackground />
      <div className="hero-layout">
        <HeroLeft />
        <HeroRight />
      </div>
      <div className="card-container">
        <div className="education-container">
          <Education />
        </div>
        <div className="experience-container">
          <Experience />
        </div>
        <div className="skills-container">
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
