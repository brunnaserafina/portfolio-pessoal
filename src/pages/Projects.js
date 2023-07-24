import { styled } from "styled-components";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import projects from "../lists/projects";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects({ project, setIdProjectSelected }) {
  const projectsContainerRef = useRef(null);
  const navigate = useNavigate();
  const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [scrollRightVisible, setScrollRightVisible] = useState(true);

  const checkArrowsVisibility = () => {
    if (projectsContainerRef.current) {
      const container = projectsContainerRef.current;
      const scrollLeftVisible = container.scrollLeft > 0;
      const scrollRightVisible =
        container.scrollLeft < container.scrollWidth - container.clientWidth;

      setScrollLeftVisible(scrollLeftVisible);
      setScrollRightVisible(scrollRightVisible);
    }
  };

  const scrollLeft = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: "smooth",
      });
    }
  };

  function navigateToProject(projectName) {
    navigate(`/project/${projectName}`);
  }

  const scrollRight = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper ref={project}>
      <div>
        <Description>
          <h1>PORTFÓLIO</h1>
          <p>Conheça os principais projetos desenvolvidos por mim</p>
        </Description>

        <ArrowLeft visible={scrollLeftVisible.toString()} onClick={scrollLeft}>
          <BiLeftArrowAlt fontSize={"35px"} />
        </ArrowLeft>

        <ArrowRight
          visible={scrollRightVisible.toString()}
          onClick={scrollRight}
        >
          <BiRightArrowAlt fontSize={"35px"} />
        </ArrowRight>

        <ProjectsContainer
          ref={projectsContainerRef}
          onScroll={checkArrowsVisibility}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <img
                src={project.image}
                alt={project.title}
                onClick={() => navigateToProject(project.pathName)}
              />
              <div>
                <h1>{project.title}</h1>

                <div>
                  {project.techs.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <button onClick={() => navigateToProject(project.pathName)}>
                  ver detalhes do projeto
                </button>
              </div>
            </div>
          ))}
        </ProjectsContainer>
      </div>
    </Wrapper>
  );
}

const ArrowLeft = styled.div`
  position: absolute;
  background-color: #8dd18b;
  width: 40px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10px;
  z-index: 2;
  cursor: pointer;
  display: ${(props) => (props.visible === "true" ? "flex" : "none")};

  &:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    color: white;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const ArrowRight = styled.div`
  position: absolute;
  right: 10px;
  background-color: #8dd18b;
  width: 40px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  display: ${(props) => (props.visible === "true" ? "flex" : "none")};

  &:hover {
    color: white;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: color 0.3s ease;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  background-color: #8dd18b;
  padding: 10vh 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

const Description = styled.div`
  background-color: #262626;
  padding: 20px;
  color: white;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Dosis";
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #8dd18b;
  }

  @media (max-width: 767px) {
    height: fit-content;
    width: 100vw;

    h1 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 1023px) {
    width: 100vw;
    height: 100%;
  }
`;

const ProjectsContainer = styled.div`
  border: 1px solid white;
  padding: 20px;
  align-items: center;
  overflow-y: auto;
  background-color: #262626;
  scrollbar-width: thin;
  scrollbar-color: #8dd18b #262626;
  display: flex;
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #8dd18b;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
    border: 2px solid #262626;
  }

  > div {
    width: fit-content;
    height: fit-content;
    margin: 0 10px;
    border: 2px solid #8dd18b;
  }

  > div > div {
    display: flex;
    background-color: #262626;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 10px;
  }

  h1 {
    color: #8dd18b;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
  }

  span {
    background-color: #8dd18b;
    margin-right: 10px;
    padding: 3px;
    border-radius: 5px;
    font-weight: 600;
    color: #262626;
    font-size: 14px;
  }

  button {
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #8dd18b;
    color: #8dd18b;
    padding: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  button:hover {
    color: white;
    border-color: white;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  img {
    width: 50vw;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    height: fit-content;
    padding: 5px;
    font-size: 14px;

    img {
      height: 50vh;
      width: 95vw;
      object-fit: cover;
    }

    h1 {
      font-size: 16px;
    }

    span {
      display: none;
    }

    > div {
      margin: 2px;
      flex: 0 0 90vw;
      scroll-snap-align: center;
    }
  }

  @media (max-width: 1023px) {
    padding: 5px;
    height: fit-content;

    > div > div {
      margin: 0;
      margin-right: 5px;
    }

    h1 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }

    button {
      font-size: 12px;
    }
  }
`;
