import { styled } from "styled-components";
import projectToDoList from "../assets/images/laptop.png";
import gifProject from "../assets/images/caopture.gif";
import { AiOutlineClose } from "react-icons/ai";
import { PiSquaresFourFill } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../lists/projects";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { projectName } = useParams();

  const project = projects.find((project) => project.pathName === projectName);

  if (!project) {
    navigate("/");
  }

  function navigateHome() {
    navigate("/");
  }

  return (
    <>
      <Wrapper>
        <Triangle />

        <Title>
          <h2>{project?.title}</h2>

          <CloseIconWrapper onClick={navigateHome}>
            <RotatingCloseIcon color={"#2e4b2d"} />
          </CloseIconWrapper>
        </Title>

        <ProjectInfo>
          <Laptop>
            <img src={projectToDoList} alt="Projeto X" />

            <Gif src={project.laptopImage} alt="Gif" />
          </Laptop>

          <Img src={project.laptopImage} />

          <ul>
            {/* <li>Acessar a aplicação</li> */}

            <li>
              <a
                href={project?.repositoryFront}
                target="_blank"
                rel="noreferrer"
              >
                Repositório front-end
              </a>
            </li>

            <li>
              <a
                href={project?.repositoryBack}
                target="_blank"
                rel="noreferrer"
              >
                Repositório back-end
              </a>
            </li>

            {/* <li>
              <PiSquaresFourFill color={"#d3d3d3"} />
              Abrir em Galeria
            </li> */}
          </ul>

          <HorizontalLine />

          <h1>{project?.subtitle}</h1>
          <p>{project?.description}</p>

          <div>
            {project.techs.map((tech, index) => (
              <div key={index}>
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </ProjectInfo>
      </Wrapper>
    </>
  );
}

const Img = styled.img`
  display: none;
  border-radius: 5px;

  @media (max-width: 767px) {
    display: initial;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("https://img.freepik.com/fotos-gratis/fundo-ruidoso_1194-7547.jpg");
`;

const Title = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 30px;
  font-family: "Dosis";

  h2 {
    font-weight: 700;
    color: white;
    padding: 5px;
    text-transform: uppercase;
  }
`;

const RotatingCloseIcon = styled(AiOutlineClose)`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(360deg);
    background-color: #8dd18b;
  }
`;

const CloseIconWrapper = styled.div`
  cursor: pointer;
`;

const HorizontalLine = styled.span`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-bottom: 20px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  font-family: "Dosis";
  z-index: 2;

  img {
    width: 760px;
  }

  h1 {
    font-size: 28px;
    text-align: start;
    width: 100%;
    font-weight: 600;
    margin-bottom: 8px;
    color: #2e4b2d;
    text-transform: uppercase;
  }

  > p {
    font-size: 18px;
    color: #2e4b2d;
  }

  > div {
    margin-top: 20px;
    display: flex;
  }

  > div > div {
    background-color: #8dd18b;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    height: 30px;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    margin-right: 10px;
    padding: 5px;
  }

  > div > div > p {
    margin-left: 3px;
    font-size: 16px;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    margin: 10px 0;
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #2e4b2d;
    font-size: 20px;
  }

  a {
    color: #2e4b2d;
  }

  li:hover {
    font-weight: 600;
  }

  @media (max-width: 767px) {
    width: 95vw;

    img {
      width: 95vw;
    }
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 100vh solid #8dd18b;
  border-right: 70vw solid transparent; /* Substitua "red" pela cor desejada */
  position: absolute;
  top: 0;
  left: 0;
`;

const Laptop = styled.div`
  position: relative;

  @media (max-width: 767px) {
    img {
      display: none;
    }
  }
`;

const Gif = styled.img`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  width: 590px !important;
  height: 400px;
  object-fit: cover;
  object-position: top;
  border-radius: 5px;
`;
