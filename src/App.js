import Home from "./pages/Home";

import "../src/assets/styles/reset.css";
import "../src/assets/styles/style.css";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
