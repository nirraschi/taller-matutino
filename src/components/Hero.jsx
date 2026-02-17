import heroImage from "../assets/fondo.jpeg";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-white"
        id="inicio">

            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Overlay oscuro para que el texto se lea bien */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Contenido */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                    Taller Matutino
                </h1>

                <p className="text-lg md:text-xl mb-8 font-light">
                    Espacio de producción y experimentación artística dentro de la carrera.
                </p>

                <a className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300"
                href="#imagenes">
                    Ver imágenes
                </a>
            </div>
        </section>
    );
};

export default Hero;
