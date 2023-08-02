import { styled } from "styled-components";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { MdZoomOutMap } from "react-icons/md";
import projects from "../lists/projects";
import { useRef, useState } from "react";

export default function Projects({ project }) {
  const projectsContainerRef = useRef(null);
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
        left: -1000,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollBy({
        top: 0,
        left: 1000,
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
          <BiLeftArrowAlt fontSize={"60px"} />
        </ArrowLeft>

        <ArrowRight
          visible={scrollRightVisible.toString()}
          onClick={scrollRight}
        >
          <BiRightArrowAlt fontSize={"60px"} />
        </ArrowRight>

        <ProjectsContainer
          ref={projectsContainerRef}
          onScroll={checkArrowsVisibility}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <ImageProject>
                <a href={`/project/${project.pathName}`}>
                  <img src={project.image} alt={project.title} />

                  <p>
                    <MdZoomOutMap fontSize={"50px"} />
                  </p>
                </a>
              </ImageProject>

              <div>
                <h1>{project.function}</h1>

                <div>
                  {project.techs.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <button>
                  <a href={`/project/${project.pathName}`}>
                    ver detalhes do projeto
                  </a>
                </button>
              </div>
            </div>
          ))}
        </ProjectsContainer>
      </div>
    </Wrapper>
  );
}

const ImageProject = styled.section`
  position: relative;
  cursor: pointer;
  background-color: white;

  &:hover img {
    filter: grayscale(100%);
  }

  &:hover p {
    display: initial;
  }

  p {
    position: absolute;
    bottom: 40%;
    left: 50%;
    margin: auto;
    display: none;
    color: #8dd18b;
  }
`;

const ArrowLeft = styled.div`
  position: absolute;
  background-color: #8dd18b;
  width: 50px;
  height: 80px;
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
  width: 50px;
  height: 80px;
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
  background-color: #ffcabf;
  padding: 10vh 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

const Description = styled.div`
  background-color: #8dd18b;
  padding: 20px;
  color: #2e4b2d;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;

  h1 {
    font-family: "Dosis";
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #2e4b2d;
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
  padding: 20px;
  align-items: center;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #8dd18b #262626;
  background-color: #8dd18b;
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
    background-color: #d3d3d3;
    border-radius: 10px;
  }

  > div {
    width: fit-content;
    height: fit-content;
    margin: 0px 10px 20px 0px;
    border: 1px solid white;
  }

  > div > div {
    display: flex;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    width: 100%;
  }

  h1 {
    color: #2e4b2d;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }

  span {
    background-color: #c4c4c4;
    margin-right: 10px;
    padding: 3px;
    border-radius: 5px;
    font-weight: 600;
    color: #262626;
    font-size: 14px;
  }

  button {
    background-color: #2e4b2d;
    border-radius: 10px;
    border: 1px solid #2e4b2d;
    color: #8dd18b;
    padding: 3px 6px;
    cursor: pointer;
    font-size: 17px;
  }

  button a {
    color: white;
  }

  button:hover,
  button:hover a {
    color: #8dd18b;
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
    overflow-y: auto;

    img {
      height: 50vh;
      width: 95vw;
      object-fit: cover;
    }

    h1 {
      font-size: 16px;
    }

    > div {
      margin: 2px;
      flex: 0 0 90vw;
      scroll-snap-align: center;
    }
  }

  @media (max-width: 1024px) {
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
      display: none;
    }

    button {
      font-size: 12px;
    }
  }
`;
