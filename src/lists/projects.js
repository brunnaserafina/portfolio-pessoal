import capaToDoList from "../assets/images/capa-todolist.png";
import capaMyWallet from "../assets/images/capa-mywallet.png";
import capaParrots from "../assets/images/capa-parrotsgame.png";
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
  {
    id: 9,
    pathName: "parrotcardgame",
    title: "Parrot Card Game",
    function: "Jogo da memória",
    subtitle: "Jogo da memória",
    description:
      "Site de jogo da memória com a temática de papagaios dançantes. Envolve bastante lógica de programação permitindo que o usuário possa escolher com quantas cartas quer jogar, selecionar para desvirar uma dupla de cartas e visualizar em quantas jogadas ganhou.",
    techs: ["HTML", "CSS", "JavaScript"],
    image: capaParrots,
    laptopImage:
      "https://user-images.githubusercontent.com/106851605/215228207-6d2f6e65-48c3-46b9-a564-8f91a0083af4.gif",
    gallery: {},
    repositoryFront: "https://github.com/brunnaserafina/parrots-card-game",
    repositoryBack: "",
    deploy: "https://brunnaserafina.github.io/parrots-card-game/"
  },
];
export default projects;
