import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-neutral-900 text-neutral-100 z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* Logo + Nombre */}
                <div className="flex gap-4 justify-center items-center">
                    <a href="/" className="text-xl font-serif">
                        <img src={logo} alt="Logo" className="h-16 hover:scale-150 transition-all duration-300 ease-in-out" />
                    </a>
                    <h1 className="text-lg font-serif tracking-wide">
                        Taller de Arte
                    </h1>

                </div>

                {/* Links */}
                <div className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
                    <a href="/#inicio" className="hover:text-white transition duration-300">
                        Inicio
                    </a>
                    <a href="/#taller" className="hover:text-white transition duration-300">
                        El taller
                    </a>
                    <a href="/#imagenes" className="hover:text-white transition duration-300">
                        Imágenes
                    </a>
                    <a href="/#herramientas" className="hover:text-white transition duration-300">
                        Herramientas
                    </a>

                    <Link to="/novedades" className="hover:text-white transition duration-300" >Novedades</Link>

                    <a href="/#proyecto" className="hover:text-white transition duration-300">
                        Proyecto
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
