import React from "react";

const Navbar = () => {
    return (
        <header>
            <nav className="bg-indigo-600 position-fixed drop-shadow-lg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-5 rtl:space-x-reverse">
                        <img src="./img/logoNav.png" className="h-10" alt="DevQuizLogo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">DevQuiz</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;