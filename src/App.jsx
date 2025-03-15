import "./styles/HeroSection.css";
import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";
import "./App.css";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <div className="grid"></div>
      <div className="hero-layout">
        <HeroLeft />
        <HeroRight />
      </div>
      <div className="card-container">
        <Education />
        <Experience />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
