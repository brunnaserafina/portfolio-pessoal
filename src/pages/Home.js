import { useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../assets/images/Logo6.png";
import person from "../assets/images/Logo nav.png";

export default function Home({
  scrollToSection,
  home,
  aboutme,
  project,
  contact,
}) {
  const [openMenuHamburger, setOpenMenuHamburger] = useState(false);
  const logoRef = useRef(null);

  function handleWhatsApp() {
    const message = "Olá, Brunna!";

    window.open(
      `https://wa.me/5548996059421?text=${encodeURIComponent(message)}`
    );
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      logoRef.current.classList.add("fadeIn");
    }, 100);

    const cleanupTimerId = setTimeout(() => {
      logoRef.current.classList.remove("fadeIn");
    }, 1000);

    return () => {
      clearTimeout(timerId);
      clearTimeout(cleanupTimerId);
    };
  }, []);

  return (
    <Wrapper ref={home}>
      {openMenuHamburger && (
        <NavMenuHamburger>
          <li onClick={() => scrollToSection(home)}>Home</li>
          <li onClick={() => scrollToSection(aboutme)}>Sobre mim</li>
          <img src="" alt="" />
          <li onClick={() => scrollToSection(project)}>Projetos</li>
          <li onClick={() => scrollToSection(contact)}>Contato</li>
        </NavMenuHamburger>
      )}

      <Menu>
        <MenuHamburger
          onClick={() => setOpenMenuHamburger(!openMenuHamburger)}
          open={openMenuHamburger}
        >
          {openMenuHamburger ? (
            <AiOutlineClose fontSize={"30px"} color="#2e4b2d" />
          ) : (
            <GiHamburgerMenu fontSize={"35px"} color="#2e4b2d" />
          )}
        </MenuHamburger>

        <div>
          <span>
            <Icon>
              <a
                href="https://github.com/brunnaserafina"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub fontSize={"25px"} />
              </a>
            </Icon>
            <Icon>
              <a
                href="https://www.linkedin.com/in/brunna-serafina/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin fontSize={"25px"} />
              </a>
            </Icon>
          </span>

          <WhatsappDiv onClick={handleWhatsApp}>
            <Icon>
              <span>
                <IoLogoWhatsapp fontSize={"25px"} />
              </span>
            </Icon>
            <p>48 996059421</p>
          </WhatsappDiv>
        </div>
      </Menu>

      <nav>
        <li onClick={() => scrollToSection(home)}>Home</li>
        <li onClick={() => scrollToSection(aboutme)}>Sobre mim</li>
        <img src="" alt="" />
        <li onClick={() => scrollToSection(project)}>Projetos</li>
        <li onClick={() => scrollToSection(contact)}>Contato</li>
      </nav>

      <Img ref={logoRef} src={logo} alt="Background Logo" />

      <ImgPerson src={person} alt="Avatar" />
    </Wrapper>
  );
}

const HorizontalLine = styled.div`
  height: 5px;
  background-color: #8dd18b;
  width: 100%;
  margin-bottom: 4vh;
  position: absolute;
  bottom: -40px;
  z-index: 2;
`;

const WhatsappDiv = styled.span`
  p {
    color: #2e4b2d !important;
  }

  &:hover p,
  &:hover span {
    color: #8dd18b !important;
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-80%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Dosis";
  position: relative;
  border-bottom: 5px solid #8dd18b;

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

  li {
    margin: 45px;
    text-transform: uppercase;
    text-decoration: none;
    color: #2e4b2d;
    font-size: 21px;
    font-weight: 700;
    position: relative;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
  }

  li:hover::after {
    content: "⌵";
    position: absolute;
    bottom: -20px;
    left: 50%;
    font-weight: bold;
    transform: translateX(-50%);
  }

  li:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  p {
    color: #8dd18b;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  }

  p:hover {
    color: white;
  }

  @media (max-width: 1023px) {
    a {
      font-size: 16px;
      margin: 30px;
    }

    p {
      font-size: 14px;
    }

    li {
      margin: 45px 20px;
    }
  }

  @media (max-width: 767px) {
    background-image: url("https://img.freepik.com/fotos-gratis/fundo-ruidoso_1194-7547.jpg");

    nav {
      display: none;
    }
  }
`;

const NavMenuHamburger = styled.div`
  display: none;

  li {
    margin: 20px 0;
  }

  @media (max-width: 767px) {
    background-color: #8dd18b;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${({ open }) => (open ? null : fadeIn)} 1s ease;

    li {
      font-size: 18px;
    }
  }
`;

const Icon = styled.div`
  background-color: #2e4b2d;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  a {
    color: white;
  }

  span {
    cursor: pointer;
    color: white;
  }

  &:hover a,
  &:hover span {
    color: #8dd18b;
    transition: color 0.3s ease;
  }

  @media (max-width: 1023px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

const Img = styled.img`
  width: 1024px;
  margin-top: -12vh;
  z-index: -1;

  &.fadeIn {
    animation: ${fadeInAnimation} 1s ease;
  }

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
  display: none;

  @media (max-width: 767px) {
    display: initial;
    width: 100%;
    z-index: 1;
  }
`;
