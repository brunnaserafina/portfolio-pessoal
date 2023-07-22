import Home from "./pages/Home";

import "../src/assets/styles/reset.css";
import "../src/assets/styles/style.css";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const home = useRef(null);
  const aboutme = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <ToastContainer />
      <Home
        scrollToSection={scrollToSection}
        home={home}
        aboutme={aboutme}
        project={project}
        contact={contact}
      />
      <AboutMe aboutme={aboutme} />
      <Projects project={project} />
      <Contact
        scrollToSection={scrollToSection}
        home={home}
        aboutme={aboutme}
        project={project}
        contact={contact}
      />
    </div>
  );
}

export default App;
