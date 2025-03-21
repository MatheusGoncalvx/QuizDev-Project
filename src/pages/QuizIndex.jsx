import React, { useState } from "react"; // Importa o React e a função useState para armazenar estados
import perguntas from "../perguntas/perguntas"; // Importa as perguntas do arquivo perguntas.js
import Navbar from "../components/Navbar";

const QuizIndex = () => {
    const [respostas, setRespostas] = useState({}); // Guarda as respostas do usuário

    // Função que salva a resposta escolhida
    const responder = (perguntaId, tipo) => {
        setRespostas({ ...respostas, [perguntaId]: tipo });
        // O que acontece aqui:
        // - Cria uma cópia das respostas já escolhidas (...respostas)
        // - Adiciona a nova resposta, associando a pergunta ao tipo escolhido
    };

    // Verifica se o usuário respondeu todas as perguntas
    const todasRespondidas = Object.keys(respostas).length === perguntas.length;
    // Object.keys(respostas) → pega todas as chaves (IDs das perguntas respondidas)
    // .length → conta quantas respostas foram dadas
    // === perguntas.length → compara com o total de perguntas

    // Função que calcula o resultado final
    const calcularResultado = () => {
        const contagem = { "front-end": 0, "back-end": 0, "full-stack": 0 }; // Guarda quantas vezes cada tipo foi escolhido

        Object.values(respostas).forEach((tipo) => contagem[tipo]++);
        // Object.values(respostas) → pega só os valores do objeto (as respostas escolhidas)
        // .forEach((tipo) => contagem[tipo]++); → conta quantas vezes cada tipo apareceu

        return Object.keys(contagem).reduce((a, b) => (contagem[a] > contagem[b] ? a : b));
        // Object.keys(contagem) → pega os tipos ("front-end", "back-end", "full-stack")
        // .reduce((a, b) => ...) → encontra o tipo mais escolhido e retorna ele
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-600 p-6">
                <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-2xl border-b-4 border-indigo-500">
                    <h1 className="text-2xl md:text-3xl font-bold text-indigo-700 text-center">
                        Quiz: Qual tipo de programador você é?
                    </h1>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl mt-2">

                    {/* Renderiza todas as perguntas */}
                    {perguntas.map((pergunta) => (
                        <div key={pergunta.id} className="mb-8 pb-6 border-b border-indigo-100 last:border-0 last:mb-0 last:pb-0">
                            <h3 className="text-lg font-semibold text-indigo-900 mb-4 flex items-center">
                                <span className="flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full w-7 h-7 text-sm font-bold mr-3">
                                    {pergunta.id}
                                </span>
                                {pergunta.pergunta}
                            </h3>

                            {/* Renderiza botões de resposta */}
                            <div className="flex flex-wrap gap-3">
                                {pergunta.opcoes.map((opcao, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all
                                        ${respostas[pergunta.id] === opcao.tipo
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "bg-indigo-300 text-indigo-900 hover:bg-indigo-500 hover:text-white"
                                            }`}
                                        onClick={() => responder(pergunta.id, opcao.tipo)}
                                    >
                                        {opcao.texto}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Mostra o resultado apenas se todas as perguntas foram respondidas */}
                    {todasRespondidas && (
                        <div className="mt-6 p-4 bg-indigo-200 text-indigo-900 rounded-lg text-center">
                            <h2 className="text-xl font-bold">
                                Você é um desenvolvedor{" "}
                                <span className="text-indigo-700">{calcularResultado()}!</span>
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default QuizIndex;
