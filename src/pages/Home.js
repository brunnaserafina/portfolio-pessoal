import { styled } from "styled-components";
import logo from "../assets/images/Logo.png";
import person from "../assets/images/Logo nav.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <Wrapper>
      <Menu>
        <MenuHamburger>
          <GiHamburgerMenu fontSize={"40px"} color="#8dd18b" />
        </MenuHamburger>

        <div>
          <span>
            <Icon>
              <AiFillGithub fontSize={"25px"} />
            </Icon>
            <Icon>
              <AiFillLinkedin fontSize={"25px"} />
            </Icon>
          </span>

          <span>
            <Icon>
              <BsTelephoneFill fontSize={"20px"} />
            </Icon>
            <p>48 996059421</p>
          </span>
        </div>
      </Menu>

      <nav>
        <a href="">Home</a>
        <a href="">Sobre mim</a>
        <img src="" alt="" />
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </nav>

      <Img src={logo} alt="" />

      <ImgPerson src={person} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Dosis";
  position: relative;

  nav img {
    width: 250px;
  }

  span {
    display: flex;
    align-items: center;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    margin: 45px;
    text-transform: uppercase;
    text-decoration: none;
    color: #8dd18b;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    color: #8dd18b;
    font-weight: 500;
    font-size: 18px;
  }

  @media (max-width: 1023px) {
    a {
      font-size: 16px;
      margin: 30px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    nav {
      display: none;
    }
  }
`;

const Icon = styled.div`
  background-color: #8dd18b;
  color: #00000;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  @media (max-width: 1023px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;

const Img = styled.img`
  width: 1024px;
  margin-top: -12vh;
  z-index: -1;

  @media (max-width: 1023px) {
    width: 768px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const MenuHamburger = styled.div`
  display: none !important;

  @media (max-width: 767px) {
    display: initial !important;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 90vw;
  justify-content: space-between;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 2vh 0;
  }

  @media (max-width: 767px) {
    > div {
      justify-content: flex-end;
    }
  }
`;

const ImgPerson = styled.img`
  width: 270px;
  display: none;

  @media (max-width: 767px) {
    display: initial;

  }
`;
