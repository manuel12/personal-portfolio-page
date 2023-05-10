import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Certifications from "./components/Certifications/Certifications";

function App() {
  const handleScroll = () => {
    const currentLocation = window.location.href;
    if (currentLocation.includes("/#home")) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    }
  };

  handleScroll();

  return (
    <div className='App' id='home'>
      <Navbar />
      <Home />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
