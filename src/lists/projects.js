import capaToDoList from "../assets/images/capa-todolist.png";
import capaMyWallet from "../assets/images/capa-mywallet.png";
import capaParrots from "../assets/images/capa-parrotsgame.png";
import capaBackToTheDisc from "../assets/images/capa-backtothedisc.png";
import capaDrivent from "../assets/images/capa-drivent.png";
import laptopToDoList from "../assets/images/laptop-todolist.gif";
import laptopMyWallet from "../assets/images/laptop-mywallet.gif";
import laptopBackToTheDisc from "../assets/images/laptop-backtothedisc.gif";
import laptopDrivent from "../assets/images/laptop-drivent.gif";

const projects = [
  {
    id: 1,
    pathName: "todolist",
    title: "To-do-list",
    function: "Gerenciador de tarefas",
    subtitle: "Site para gerenciar tarefas",
    description:
      "Este website oferece uma experiência única para você criar e gerenciar suas tarefas diárias de forma intuitiva e eficiente.",
    techs: ["Reactjs", "Nodejs", "TypeScript", "PostgreSQL"],
    image: capaToDoList,
    laptopImage: laptopToDoList,
    gallery: {},
    repositoryFront: "https://github.com/brunnaserafina/to-do-list-challenge",
    repositoryBack: "https://github.com/brunnaserafina/to-do-list-api",
  },
  {
    id: 2,
    pathName: "drivent",
    title: "Driven.t",
    function: "Organizador de eventos",
    subtitle: "Site de gerenciamento de eventos",
    description:
      "Ao contrário do que possa parecer de início, o Driven.t não é um gerenciador de múltiplos eventos. A proposta é criar um sistema que gerencie apenas UM evento. Desta forma, para cada evento que o cliente quiser gerenciar, ele teria uma aplicação do Driven.t rodando. O funcionamento do Driven.t é relativamente simples: o usuário deverá fazer uma inscrição para o Evento (online ou presencial); para um evento de modalidade presencial, o usuário poderá escolher se deseja com ou sem hospedagem (hotel); o usuário também poderá escolher uma formas de pagamento; além disso, o usuário também escolhe as suas atividades no evento; por fim, também é possível emitir um certificado de participação do evento.",
    techs: [
      "Reactjs",
      "Nodejs",
      "TypeScript",
      "Firebase",
      "PostgreSQL",
      "Redis",
    ],
    image: capaDrivent,
    laptopImage: laptopDrivent,
    gallery: {},
    repositoryFront: "https://github.com/brunnaserafina/drivent",
    repositoryBack: "https://github.com/brunnaserafina/drivent-backend",
  },
  {
    id: 3,
    pathName: "backtothedisc",
    title: "Back To The Disc",
    function: "E-commerce de discos",
    subtitle: "E-commerce de discos de vinil",
    description:
      "Página web para compra de discos de vinil desenvolvida por um time de duas pessoas. Possui funcionalidades como login, cadastro, listagem de álbuns, barra de pesquisa, adicionar e remover disco do carrinho, escolher a quantidade do disco comprado, procurar endereço pelo CEP, confirmação pós compra pelo e-mail e histórico de compras.",
    techs: ["Reactjs", "Nodejs", "MongoDB"],
    image: capaBackToTheDisc,
    laptopImage: laptopBackToTheDisc,
    gallery: {},
    repositoryFront: "https://github.com/brunnaserafina/back-to-the-disc",
    repositoryBack:
      "https://github.com/brunnaserafina/back-to-the-disc-backend",
  },
  {
    id: 4,
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
    deploy: "https://brunnaserafina.github.io/parrots-card-game/",
  },
];
export default projects;
