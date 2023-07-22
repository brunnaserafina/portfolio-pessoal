import workTeam from "../assets/images/icon-workteam.png";
import organizing from "../assets/images/icon-organizing.png";
import tests from "../assets/images/icon-tests.png";
import { HiUserGroup } from "react-icons/hi";
import { MdContentPasteSearch } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";

const differentials = [
  {
    title: "Experiência com metodologias ágeis e trabalhos em equipe",
    image: workTeam,
    icon: <HiUserGroup fontSize={"60px"} color={"white"} />,
  },
  {
    title:
      "Organização e atenção aos detalhes com sites fidedignos ao design criado",
    image: organizing,
    icon: <MdContentPasteSearch fontSize={"60px"} color={"white"} />,
  },
  {
    title: "Testes unitários e de integração garantindo a qualidade do código",
    image: tests,
    icon: <SiTestcafe fontSize={"60px"} color={"white"} />,
  },
];

export default differentials;
