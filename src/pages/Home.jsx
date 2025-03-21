import React from "react";
import ButtonStart from "../components/ButtonStart";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-indigo-800" id="main">
            <section id="section1" className="container mx-auto px-4 py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                            Eai programador, de boa?
                            Bem vindo ao DevQuiz
                        </h2>

                        <p className="text-indigo-100 mt-5 text-lg">
                            Este aplicativo é um quiz de perguntas para saber qual área da programação mais se alinha com suas
                            escolhas.
                        </p>

                        <div className="mt-5">
                            <Link to="/quiz">
                                <ButtonStart />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-2/5 mt-8 md:mt-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-400 rounded-full blur-xl opacity-30"></div>
                            <img
                                src="./img/celular.png"
                                alt="DevQuiz"
                                className="relative z-10 mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
