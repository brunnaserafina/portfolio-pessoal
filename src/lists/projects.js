import capaToDoList from "../assets/images/capa-todolist.png";
import capaMyWallet from "../assets/images/capa-mywallet.png";
import laptopToDoList from "../assets/images/laptop-todolist.gif";
import laptopMyWallet from "../assets/images/laptop-mywallet.gif";

const projects = [
  {
    id: 1,
    pathName: "todolist",
    title: "To-do-list",
    function: "Organizador de tarefas",
    subtitle: "Site para gerenciar tarefas",
    description:
      "Este é um website To-Do List que permite aos usuários criar e gerenciar suas tarefas diárias. Possui uma interface intuitiva e fácil de usar, tornando-se uma ferramenta prática para ajudar a priorizar os afazeres mais importantes.",
    techs: ["Reactjs", "Nodejs", "PostgreSQL"],
    image: capaToDoList,
    laptopImage: laptopToDoList,
    gallery: {},
    repositoryFront: "https://github.com/brunnaserafina/to-do-list-challenge",
    repositoryBack: "https://github.com/brunnaserafina/to-do-list-api",
  },
  {
    id: 2,
    pathName: "mywallet",
    title: "My Wallet",
    function: "Carteira virtual",
    subtitle: "Carteira virtual",
    description:
      "Esta é uma aplicação web mobile para controle de gastos, ajudando o usuário a se organizar financeiramente.",
    techs: ["Reactjs", "Nodejs", "MongoDB"],
    image: capaMyWallet,
    laptopImage: laptopMyWallet,
    gallery: {},
    repositoryFront: "https://github.com/brunnaserafina/my-wallet",
    repositoryBack: "https://github.com/brunnaserafina/my-wallet-api",
  },
];
export default projects;
