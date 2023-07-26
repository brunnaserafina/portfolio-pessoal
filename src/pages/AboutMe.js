import { useState } from "react";
import { styled } from "styled-components";
import perfil from "../assets/images/foto-perfil.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import techIcons from "../lists/techIcons";
import differentials from "../lists/differentials";
import certifications from "../lists/certifications";

export default function AboutMe({ aboutme }) {
  const [sliderRef, setSliderRef] = useState(null);
  const [sliderRefTwo, setSliderRefTwo] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
    beforeChange: (current, next) => {
      if (sliderRef) {
        sliderRef.slickGoTo(next);
      }
    },
  };

  const settingsTwo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
    beforeChange: (current, next) => {
      if (sliderRef) {
        sliderRef.slickGoTo(next);
      }
    },
  };

  return (
    <Wrapper ref={aboutme}>
      <Apresentation>
        <div>
          <h2>Citação</h2>

          <Blockquote>
            <QuoteLeftIcon />
            <p>
              A arte de programar consiste na arte de organizar e dominar a
              complexidade.
            </p>
            <QuoteRightIcon />
          </Blockquote>

          <h5>- Dijkstra</h5>
        </div>

        <img src={perfil} alt="Perfil" />

        <div>
          <h1>Olá,</h1>
          <p>
            sou a Brunna Serafina. Possuo um ano de experiência na área de
            desenvolvimento web full-stack, tanto em equipes colaborativas como
            em projetos individuais. Durante minha participação no bootcamp da
            Driven Education tive a oportunidade de desenvolver minhas
            hard-skills, ter contato com metodologias ágeis e estudar sobre a
            importância de soft-skills como autodidatismo, gestão de tempo,
            gestão emocional e trabalho em equipe.
          </p>
        </div>
      </Apresentation>

      <Tech>
        <h3>TECNOLOGIAS:</h3>
        <TechContainer>
          {techIcons.map((icon, index) => (
            <div key={index}>
              <TechDiv color={icon.color}>{icon.icon}</TechDiv>
              <p>{icon.text}</p>
            </div>
          ))}
        </TechContainer>
      </Tech>

      <Div>
        <Container>
          <div>
            <h2>FORMAÇÃO E CERTIFICAÇÕES</h2>
            <Slider {...settings} ref={(slider) => setSliderRefTwo(slider)}>
              {certifications.map((certificate, index) => (
                <div key={index}>
                  <span>
                    <img src={certificate.image} alt="" />
                  </span>

                  <h6>
                    {certificate.category} em <br></br>
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      {certificate.title}
                    </a>
                    <br></br>
                    {certificate.institution}
                  </h6>
                </div>
              ))}
            </Slider>
          </div>
        </Container>

        <Container>
          <div>
            <h2>DIFERENCIAIS</h2>
            <Slider {...settingsTwo} ref={(slider) => setSliderRefTwo(slider)}>
              {differentials.map((differential, index) => (
                <div key={index}>
                  <span>{differential.icon}</span>

                  <h6>
                    <bold>{differential.title}</bold>

                    <br></br>
                  </h6>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </Div>
    </Wrapper>
  );
}

const Tech = styled.div`
  background-image: linear-gradient(to bottom, #8dd18b 55%, transparent 30%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: "Dosis";
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #2e4b2d;
  }

  @media (max-width: 767px) {
    > div {
      overflow-x: auto;
      max-width: 80vw;
    }
  }
`;

const TechContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 90vw;
  padding: 3px 0;

  > div {
    width: 85px;
    flex-shrink: 0;
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-top: 8px;
    font-weight: 700;
    color: #2e4b2d;

    font-size: 14px;
  }

  @media (max-width: 767px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    max-width: 100%;
  }
`;

const TechDiv = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 480px;
  height: 250px;
  background-color: #8dd18b;
  border-top: 5px solid white;
  border-radius: 20px;
  margin: 30px;
  padding: 30px;
  box-sizing: border-box;

  h2 {
    text-transform: uppercase;
    color: #2e4b2d;
    font-weight: 700;
    margin-bottom: 10px;
    font-family: "Dosis";
    font-size: 19px;
  }

  h6 {
    color: #2e4b2d;
    font-family: "Raleway";
    font-size: 15px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
    height: 60px;
  }

  bold {
    font-weight: 700;
  }

  a {
    color: #2e4b2d;
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }

  > div {
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  span {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div img {
    height: 50px;
    width: fit-content;
    text-align: center;
  }

  span {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  @media (max-width: 1023px) {
    width: 370px;
    margin: 10px;
  }

  @media (max-width: 767px) {
    width: 80%;
    margin: 10px;
  }
`;

const QuoteLeftIcon = styled(FaQuoteLeft)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 15px;
  color: #d3d3d3;
`;

const QuoteRightIcon = styled(FaQuoteRight)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 15px;
  color: #d3d3d3;
`;

const Blockquote = styled.blockquote`
  position: relative;
  padding-left: 20px;
  margin: 20px 0;

  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
    font-style: italic;
  }
`;
const Wrapper = styled.section`
  background-color: #c4c4c4;
  background-image: url("https://img.freepik.com/fotos-gratis/fundo-ruidoso_1194-7547.jpg");
`;

const Apresentation = styled.div`
  background-color: #8dd18b;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5 0vh;
  padding: 50px;
  /* border-top: 2px solid white; */

  h2 {
    text-transform: uppercase;
    color: #2e4b2d;
    font-weight: 700;
    font-family: "Dosis";
  }

  p {
    max-width: 300px;
    color: #2e4b2d;
    line-height: 17px;
    font-size: 15px;
    text-align: justify;
  }

  h5 {
    color: #2e4b2d;
    text-align: end;
  }

  h1 {
    color: #2e4b2d;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
    font-family: "Dosis";
  }

  img {
    width: 200px;
    margin: 0 30px;
  }

  @media (max-width: 1023px) {
    img {
      width: 150px;
    }

    p {
      min-width: 100px;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Div = styled.div`
  width: 100% !important;
  min-height: 500px;
  display: flex;
  justify-content: center !important;
  align-items: center;
  z-index: 0;

  @media (max-width: 767px) {
    padding: 70px 0 50px 0;

    flex-direction: column;
  }
`;
