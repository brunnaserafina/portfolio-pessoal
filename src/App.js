import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/assets/styles/reset.css";
import "../src/assets/styles/style.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectDetail from "./pages/ProjectDetail";

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
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />

          <Route path="/project/:projectName" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
