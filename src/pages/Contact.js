import styled from "styled-components";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact({
  scrollToSection,
  home,
  aboutme,
  project,
  contact,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      subject: subject,
      message: message,
      email: email,
      phone: phone,
    };

    emailjs
      .send(
        "service_hlzg1k7",
        "template_y27nkig",
        templateParams,
        "ClZtahMJijyg_z-ha"
      )
      .then(
        (response) => {
          toast.success("Email enviado com sucesso!");
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          toast.error("Erro ao enviar e-mail, tente novamente!");
        }
      );
  }

  function handleWhatsApp() {
    const message = "Olá, Brunna!";

    window.open(
      `https://wa.me/5548996059421?text=${encodeURIComponent(message)}`
    );
  }

  return (
    <Wrapper ref={contact}>
      <TalkToMe>
        <h2>Fale comigo!</h2>
        <p>
          Resta alguma dúvida? Preencha os campos abaixo que em breve entrarei
          em contato.
        </p>

        <form onSubmit={sendEmail}>
          <span>
            <div>
              <label>Seu nome*:</label>
              <input
                type="text"
                placeholder="Digite aqui seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div>
              <label>E-mail*:</label>
              <input
                type="email"
                placeholder="email@exemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
          </span>

          <span>
            <div>
              <label>Telefone:</label>
              <input
                type="tel"
                placeholder="(_ _)_ _ _ _ _- _ _ _ _"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div>
              <label>Assunto:</label>
              <input
                type="text"
                placeholder="Digite aqui o assunto"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>
          </span>
          <div>
            <label>Mensagem*:</label>
            <textarea
              type="text"
              placeholder="Escreva aqui sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </TalkToMe>

      <HorizontalLine></HorizontalLine>

      <Footer>
        <Menu>
          <h2>Menu</h2>

          <ul>
            <li onClick={() => scrollToSection(home)}>Home</li>
            <li onClick={() => scrollToSection(aboutme)}>Sobre Mim</li>
            <li onClick={() => scrollToSection(project)}>Projetos</li>
            <li onClick={() => scrollToSection(contact)}>Contato</li>
          </ul>
        </Menu>

        <Contacts>
          <h2>Contatos</h2>
          <div>
            <div>
              <a
                href="https://www.linkedin.com/in/brunna-serafina/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <AiFillLinkedin />
                </span>

                <h5>Linkedin</h5>
                <p>@brunna-serafina</p>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/brunnaserafina"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <AiFillGithub />
                </span>

                <h5>Github</h5>
                <p>@brunnaserafina</p>
              </a>
            </div>
            <div>
              <li onClick={handleWhatsApp}>
                <span>
                  <IoLogoWhatsapp />
                </span>

                <h5>WhatsApp</h5>
                <p>(48) 99605-9421</p>
              </li>
            </div>
            <div>
              <a href="mailto:brunnaserafina@gmail.com">
                <span>
                  <MdEmail />
                </span>

                <h5>E-mail</h5>
                <p>brunnaserafina@gmail.com</p>
              </a>
            </div>
          </div>
        </Contacts>
      </Footer>

      <CopyRight>Copyright © 2023 Brunna Serafina</CopyRight>
    </Wrapper>
  );
}

const HorizontalLine = styled.div`
  height: 1px;
  background-color: #8dd18b;
  width: 100%;
  margin-bottom: 4vh;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #8dd18b;

  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 3vh;
    text-align: center;
    font-family: "Dosis";
    text-transform: uppercase;
    color: #2e4b2d;
  }
`;

const TalkToMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 640px;

  h2 {
    margin-top: 5vh;
    font-size: 24px !important;
  }

  p {
    color: #2e4b2d;
    font-size: 16px;
    margin-bottom: 30px;
  }

  label {
    color: #2e4b2d;
    margin: 5px 0px;
    display: flex;
    font-size: 14px;
  }

  input,
  textarea,
  button {
    border-radius: 10px;
    border: none;
    font-family: Lexend Deca;
    padding: 10px;
    font-family: "Raleway";
  }

  textarea {
    width: 100%;
    min-height: 120px;
  }

  button {
    margin-bottom: 100px;
    width: 100%;
    background-color: #2e4b2d;
    color: white;
    font-weight: 600;
    font-size: 17px;
    margin-top: 10px;
    cursor: pointer;
  }

  button:hover {
    color: #8dd18b;
  }

  input {
    height: 40px;
    width: 310px;
    margin-bottom: 15px;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 14px;
  }

  form {
    width: 100%;
  }

  form span {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    width: 85vw;

    h2 {
      font-size: 22px;
      margin-top: 35px;
    }

    p {
      text-align: justify;
      font-size: 16px;
    }

    form {
      width: 85vw;
    }

    input {
      width: 85vw;
    }

    form span {
      flex-direction: column;
    }

    label {
      margin: 2.5px 0px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 8vw;

  ul {
    margin-top: 4px;
  }

  li {
    color: #2e4b2d;
    margin: 12px 0;
    text-transform: uppercase;
    font-family: "Dosis";
    cursor: pointer;
  }

  li:hover {
    text-decoration: underline;
  }

  h2 {
    text-align: start;
  }

  @media (max-width: 767px) {
    justify-content: center;
    width: 100vw;

    h2,
    li {
      text-align: center;
    }

    li {
      font-size: 18px;
      margin: 18px 0;
    }

    ul {
      margin-top: 0;
      margin-bottom: 30px;
    }

    h2 {
      font-size: 22px;
    }
  }
`;

const Contacts = styled.div`
  > div {
    display: flex;
    margin-bottom: 60px;
  }

  h2 {
    text-align: center;
  }

  a,
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin: 30px 10px;
  }

  > div > div a,
  > div > div li {
    text-align: center;
  }

  > div > div:hover a,
  > div > div:hover li {
    text-decoration: underline;
  }

  span {
    font-size: 24px;
    background-color: #2e4b2d;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    margin-bottom: 10px;
  }

  > div > div:hover span {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    color: #8dd18b;
  }

  h5 {
    font-size: 16px;
    margin-bottom: 5px;
    color: #2e4b2d;
  }

  p {
    color: #2e4b2d;
  }

  @media (max-width: 767px) {
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 20px;
    }

    h5,
    p {
      font-size: 14px;
    }

    p {
      font-size: 15px;
    }

    h2 {
      font-size: 22px;
      text-align: center;
    }
  }
`;

const Footer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const CopyRight = styled.div`
  margin: 50px 0px 30px 0px;
  position: relative;
  bottom: 0;
  color: #2e4b2d;
`;
