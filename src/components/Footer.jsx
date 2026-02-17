const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300 py-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

                {/* Columna 1 */}
                <div>
                    <h4 className="text-lg font-serif text-white mb-4">
                        Taller de Arte
                    </h4>
                    <p className="text-sm leading-relaxed">
                        Espacio de producción y formación artística.
                    </p>
                </div>

                {/* Columna 2 */}
                <div>
                    <h5 className="text-sm uppercase tracking-wider text-neutral-400 mb-4">
                        Marco institucional
                    </h5>
                    <p className="text-sm leading-relaxed">
                        Facultad de Artes <br />
                        Universidad Nacional de Tucumán
                    </p>
                </div>

                {/* Columna 3 */}
                <div>
                    <h5 className="text-sm uppercase tracking-wider text-neutral-400 mb-4">
                        Proyecto académico
                    </h5>
                    <p className="text-sm leading-relaxed">
                        Desarrollo y diseño por alumnas del Taller Matutino.
                    </p>
                </div>

            </div>

            {/* Línea inferior */}
            <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-xs text-neutral-500">
                © {new Date().getFullYear()} Taller de Arte — Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
