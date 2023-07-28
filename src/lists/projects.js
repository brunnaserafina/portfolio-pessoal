import capaToDoList from "../assets/images/capa-todolist.png";
import capaMyWallet from "../assets/images/capa-mywallet.png";
import laptopToDoList from "../assets/images/laptop-todolist.gif";
import laptopMyWallet from "../assets/images/laptop-mywallet.gif";

const projects = [
  {
    id: 1,
    pathName: "todolist",
    title: "To-do-list",
    function: "Gerenciador de tarefas",
    subtitle: "Site para gerenciar tarefas",
    description:
      "Bem-vindo ao meu projeto To Do List! Este website oferece uma experiência única para você criar e gerenciar suas tarefas diárias de forma intuitiva e eficiente.",
    techs: ["Reactjs", "Nodejs", "TypeScript", "PostgreSQL"],
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
