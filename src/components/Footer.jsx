import React from "react";

const Footer = () => {
    return (
        <footer class="bg-gradient-to-br from-indigo-600 to-indigo-800 drop-shadow-lg">
        <div class="container mx-auto max-w-6xl p-6">
            <div class="md:flex md:items-center md:justify-between">
                <div class="text-center md:text-left mb-6 md:mb-0">
                    <p class="text-sm text-white mt-1">© 2025 - Todos os direitos reservados</p>
                </div>

                <div class="flex justify-center space-x-6">
                    {/* Link GitHub */}
                    <a href="https://github.com/MatheusGoncalvx" class="text-white hover:text-blue-800">
                        <i class="fab fa-github text-xl"></i>
                    </a>

                    {/* Link Linkedin */}
                    <a href="https://www.linkedin.com/in/matheus-gon%C3%A7alves-690691258/"
                        class="text-white hover:text-blue-800">
                        <i class="fab fa-linkedin text-xl"></i>
                    </a>

                    {/* Link Email */}
                    <a href="mailto:matheusgoncalvs2@gmail.com" class="text-white hover:text-blue-800">
                        <i class="far fa-envelope text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;