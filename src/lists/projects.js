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
    description: (
      <>
        Este website oferece uma experiência única para criar e gerenciar
        tarefas diárias de forma intuitiva e eficiente. Com funcionalidades como{" "}
        <strong>cadastro</strong>, <strong>login</strong> e
        <strong> logout</strong>, o usuário pode acessar suas listas de qualquer
        lugar. O toque de mágica está na <strong>sidebar</strong> que abriga
        todas as listas do usuário, permitindo uma{" "}
        <strong>modificação da ordem dos itens</strong> e a{" "}
        <strong>criação de novas listas</strong>. Além disso, é possível
        <strong> visualizar as tarefas</strong> a fazer e as já concluídas de
        acordo com a lista selecionada, com opções de <strong>adicionar</strong>
        , <strong>editar</strong>, <strong>excluir</strong>,{" "}
        <strong>marcar tarefas como feitas</strong> e adicionar{" "}
        <strong>anotações</strong> e <strong>data</strong> para cada uma através
        da sidebar na lateral direita. Outra facilidade é a{" "}
        <strong>barra de pesquisa</strong> na parte superior do website, que
        permite ao usuário pesquisar tarefas e listas, tornando a busca mais
        rápida e otimizada.
      </>
    ),
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
    description: (
      <>
        Ao contrário do que possa parecer de início, o Driven.t não é um
        gerenciador de múltiplos eventos. A proposta é criar um{" "}
        <strong>sistema que gerencie apenas um evento por vez</strong>. Desta
        forma, para cada evento que o cliente quiser gerenciar, ele teria uma
        aplicação do Driven.t rodando. O funcionamento do Driven.t é
        relativamente simples: o usuário deverá fazer <strong>inscrição</strong>{" "}
        e <strong>login</strong> na plataforma, podendo{" "}
        <strong> autenticar com o Github </strong>
        já que esse é um evento de tecnologia; cadastrar seus dados; fazer uma{" "}
        <strong>inscrição para o evento</strong> (online ou presencial); sendo
        que para um evento de modalidade presencial, o usuário poderá{" "}
        <strong>escolher se deseja com ou sem hospedagem</strong> (hotel); a{" "}
        <strong>forma de pagamento</strong>; e se{" "}
        <strong>inscrever nas atividades</strong> do evento; por fim, também é
        possível <strong>emitir um certificado</strong> de participação do
        evento assim que o mesmo é finalizado.
        <br></br>
        <br></br> - Obs.: Projeto desenvolvido em um time de 4 pessoas
        utilizando metodologias ágeis.
      </>
    ),
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
    description: (
      <>
        Back To The Disc é um e-commerce dedicado aos admiradores da cultura
        única e nostálgica dos discos de vinil. Possui funcionalidades
        essenciais como <strong>login</strong> e <strong>cadastro</strong>,{" "}
        sendo posssível também visualizar a página sem estar logado. Na página
        inicial é possível explorar a <strong>listagem de álbuns</strong>,
        incluindo clássicos inesquecíveis e lançamentos mais recentes.
        Facilitando ainda mais a experiência, o website possui uma{" "}
        <strong>barra de pesquisa</strong> intuitiva que permite localizar
        discos específicos com facilidade. Para comprar um produto basta
        <strong> adicionar o disco no carrinho</strong>,{" "}
        <strong>escolher a quantidade</strong>,{" "}
        <strong>procurar endereço pelo CEP</strong>, com a possibilidade de{" "}
        <strong>confirmação</strong> pós compra pelo <strong>e-mail</strong> e
        <strong> visualização do histórico de compras</strong>.<br></br>
        <br></br> - Obs.: Projeto desenvolvido em um time de 2 pessoas
        utilizando metodologias ágeis.
      </>
    ),
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
    description: (
      <>
        Esta é uma aplicação web mobile projetada para oferecer um controle
        financeiro eficiente e auxiliar os usuários a alcançar uma maior
        organização em suas finanças pessoais. Possui <strong>cadastro</strong>,{" "}
        <strong>login</strong> e <strong>logout</strong>, facilitando o
        salvamento dos dados na conta do usuário de forma segura e suas
        funcionalidades incluem <strong>adicionar entradas e saídas</strong>,
        para
        <strong> visualizar as receitas e despesas</strong> correntes.
      </>
    ),
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
    description: (
      <>
        Site de jogo da memória com a temática de papagaios dançantes. Esse
        projeto envolveu bastante lógica de programação já que fidelizava o
        sentido do jogo, permitindo que o usuário possa{" "}
        <strong>escolher com quantas cartas quer jogar</strong>,{" "}
        <strong>selecionar para desvirar</strong> uma dupla de cartas,{" "}
        <strong>visualizar em quantas jogadas ganhou</strong> e{" "}
        <strong>optar por jogar novamente</strong>.
      </>
    ),
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
