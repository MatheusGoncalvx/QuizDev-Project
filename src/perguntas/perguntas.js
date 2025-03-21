/* Este código JavaScript define um array chamado "perguntas" que contém uma série de objetos,
cada um representando uma pergunta, assim como várias opções relacionadas às preferências de
desenvolvimento de software. Cada objeto pergunta consiste na própria pergunta e uma série de opções, 
com cada opção tendo um texto e um tipo associado a ela (por exemplo, "back-end", "front-end", 
"full-stack").*/

const perguntas = [
    {
        id: 1,
        pergunta: "Você prefere trabalhar com a estrutura dos sistemas ou com a interface?",
        opcoes: [
            { texto: "Estrutra do sistema", tipo: "back-end" },
            { texto: "Interface", tipo: "front-end" },
            { texto: "Ambos", tipo: "full-stack" }
        ]

    },

    {
        id: 2,
        pergunta: "O que mais importa em um software?",
        opcoes: [
            { texto: "Ser funcional", tipo: "back-end" },
            { texto: "Impactar de primeira com o visual", tipo: "front-end" },
            { texto: "Ser facil de entender e manipular", tipo: "full-stack" }
        ]
    },

    {
        id: 3,
        pergunta: "O que você mais gosta de fazer na área?",
        opcoes: [
            { texto: "Prototipar as telas da aplicação", tipo: " front-end " },
            { texto: "Desenvolver a lógica funcional do sistema", tipo: "back-end" },
            { texto: "Faço de tudo um pouco pois gosto de ambos", tipo: "full-stack" }
        ]
    },

    {
        id: 5,
        pergunta: "Com qual dessas tecnologias você fica mais animado em trabalhar?",
        opcoes: [
            { texto: "React, Angular, Django, Spring", tipo: "full-stack" },
            { texto: "PHP, Java, Ruby, Python", tipo: "back-end" },
            { texto: "Html, Css, Javascript", tipo: "front-end" }
        ]
    },

    {
        id: 6,
        pergunta: "Qual dessas tarefas você acha mais interessante?",
        opcoes: [
            { texto: "Criar APIs robustas para um sistema", tipo: "back-end" },
            { texto: "Integrar o front-end e back-end de forma eficiente", tipo: "full-stack" },
            { texto: "Criar componentes visuais interativos", tipo: "front-end" }
        ]
    },

    {
        id: 7,
        pergunta: "Qual dessas ferramentas você usaria primeiro ao iniciar um projeto?",
        opcoes: [
            { texto: "Node.js, Express, Banco de Dados", tipo: "back-end" },
            { texto: "Figma, HTML, CSS", tipo: "front-end" },
            { texto: "Docker, Git, CI/CD", tipo: "full-stack" }
        ]
    },

    {
        id: 8,
        pergunta: "Na divisão de tarefas prefiro desenvolver:",
        opcoes: [
            { texto: "A parte de design no figma", tipo: "front-end" },
            { texto: "A modelagem de dados e conexão com o banco no sistema", tipo: "back-end" },
            { texto: "Ambos", tipo: "full-stack" }
        ]
    },

    {
        id: 9,
        pergunta: "Em um projeto você prefere:",
        opcoes: [
            { texto: "Trabalhar em equipe", tipo: "full-stack" },
            { texto: "Ser criativo", tipo: "front-end" },
            { texto: "Ter raciocinio lógico e produtividade", tipo: "back-end" }
        ]
    }

];

export default perguntas;