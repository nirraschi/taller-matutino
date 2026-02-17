const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-neutral-900 text-neutral-100 z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* Logo / Nombre */}
                <h1 className="text-lg font-serif tracking-wide">
                    Taller de Arte
                </h1>

                {/* Links */}
                <div className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
                    <a href="#inicio" className="hover:text-white transition duration-300">
                        Inicio
                    </a>
                    <a href="#taller" className="hover:text-white transition duration-300">
                        Taller
                    </a>
                    <a href="#imagenes" className="hover:text-white transition duration-300">
                        Imágenes
                    </a>
                    <a href="#herramientas" className="hover:text-white transition duration-300">
                        Herramientas
                    </a>
                    <a href="#proyecto" className="hover:text-white transition duration-300">
                        Proyecto
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
