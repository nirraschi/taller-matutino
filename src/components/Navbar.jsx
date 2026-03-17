import { useState } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-neutral-900 text-neutral-100 z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* Logo */}
                <div className="flex gap-4 items-center">
                    <a href="/" className="text-xl font-serif">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-12 md:h-16 hover:scale-110 transition duration-300"
                        />
                    </a>
                    <h1 className="text-lg font-serif tracking-wide">
                        Taller de Escultura
                    </h1>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
                    <a href="/#inicio" className="hover:text-white  
                    hover:underline hover:underline-offset-4 transition-all hover:decoration-amber-300">Inicio</a>
                    <a href="/#imagenes" className="hover:text-white 
                    hover:underline hover:underline-offset-4 transition-all hover:decoration-amber-300">Imágenes</a>
                    <a href="/#herramientas" className="hover:text-white 
                    hover:underline hover:underline-offset-4 transition-all hover:decoration-amber-300">Herramientas</a>
                    <Link to="/novedades" className="hover:text-white 
                    hover:underline hover:underline-offset-4 transition-all hover:decoration-amber-300">Novedades</Link>
                    <a href="/#proyecto" className="hover:text-white 
                    hover:underline hover:underline-offset-4 transition-all hover:decoration-amber-300">Proyecto</a>
                </div>

                {/* Mobile button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-neutral-900 px-6 pb-6 flex flex-col gap-6 text-sm uppercase tracking-wider">

                    <a href="/#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
                    <a href="/#imagenes" onClick={() => setIsOpen(false)}>Imágenes</a>
                    <a href="/#herramientas" onClick={() => setIsOpen(false)}>Herramientas</a>

                    <Link to="/novedades" onClick={() => setIsOpen(false)}>
                        Novedades
                    </Link>

                    <a href="/#proyecto" onClick={() => setIsOpen(false)}>Proyecto</a>

                </div>
            )}
        </nav>
    )
}

export default Navbar