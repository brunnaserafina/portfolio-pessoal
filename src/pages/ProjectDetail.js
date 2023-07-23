import { styled } from "styled-components";
import projectToDoList from "../assets/images/project-todolist.png";
import { AiFillHtml5, AiOutlineClose } from "react-icons/ai";
import { PiSquaresFourFill } from "react-icons/pi";
import Contact from "./Contact";

export default function ProjectDetail() {
  return (
    <>
      <Wrapper>
        <Triangle />

        <Title>
          <h2>To-Do List</h2>

          <CloseIconWrapper>
            <RotatingCloseIcon color={"#2e4b2d"} />
          </CloseIconWrapper>
        </Title>

        <ProjectInfo>
          <img src={projectToDoList} alt="Projeto X" />

          <ul>
            <li>Acessar a aplicação</li>
            <li>
              <PiSquaresFourFill color={"#d3d3d3"} />
              Abrir em Galeria
            </li>
            <li>Repositório no github</li>
          </ul>

          <HorizontalLine />

          <h1>SITE PARA GERENCIAR TAREFAS</h1>
          <p>
            Esta é uma Single-Page Application para facilitar as reservas de
            filme no cinema, você pode escolher o filme, a sessão e o assento.
            Depois você só precisa identificar seu nome e CPF para concluir a
            reserva.
          </p>

          <div>
            <div>
              <AiFillHtml5 />
              <p>HTML5</p>
            </div>
          </div>
        </ProjectInfo>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
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
  background-color: #d3d3d3;
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
  }

  > p {
    font-size: 16px;
    color: #2e4b2d;
  }

  > div {
    margin-top: 20px;
  }

  > div > div {
    background-color: #8dd18b;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    color: white;
    font-weight: 600;
  }

  > div > div > p {
    margin-left: 3px;
    font-size: 16px;
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
