import { styled } from "styled-components";
import projects from "../lists/projects";

export default function Projects() {
  return (
    <Wrapper>
      <div>
        <Description>
          <h1>PORTFÓLIO</h1>
          <p>Conheça os principais projetos desenvolvidos por mim</p>
        </Description>
        <ProjectsContainer>
          {projects.map((project) => (
            <div>
              <img src={project.image} alt={project.title} />
              <div>
                <h1>{project.title}</h1>

                <div>
                  {project.techs.map((tech) => (
                    <span>{tech}</span>
                  ))}
                </div>

                <button>ver detalhes do projeto</button>
              </div>
            </div>
          ))}
        </ProjectsContainer>
      </div>
    </Wrapper>
  );
}

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
  }

  @media (max-width: 767px) {
    height: fit-content;
    width: 100vw;

    h1 {
      font-size: 16px;
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

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8dd18b;
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
  }

  img {
    width: 50vw;
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
