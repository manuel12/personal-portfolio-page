import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
