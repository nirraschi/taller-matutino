import aboutImage1 from "../assets/taller-1.jpeg";
import aboutImage2 from "../assets/taller-2.jpeg";

const About = () => {
    return (
        <section className="py-24 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Texto */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-snug">
                        Un espacio centrado en la formación artística
                    </h3>

                    <div className="w-16 h-[2px] bg-neutral-400 mb-8" />

                    <p className="text-lg leading-relaxed text-neutral-700 space-y-4">
                        El Taller Matutino es el espacio donde los estudiantes de la carrera
                        desarrollan sus proyectos, exploran técnicas y construyen su lenguaje visual.
                        <br /><br />
                        Aquí el aprendizaje sucede a través de la práctica, el intercambio y la
                        experimentación constante.
                        <br /><br />
                        Es un lugar de búsqueda, proceso y producción.
                    </p>
                </div>

                {/* Imágenes */}
                <div className="relative">

                    <img
                        src={aboutImage1}
                        alt="Estudiantes trabajando en el taller"
                        className="w-full h-[500px] object-cover rounded-sm shadow-lg"
                    />

                    {/* Imagen secundaria superpuesta */}
                    <img
                        src={aboutImage2}
                        alt="Detalle de materiales artísticos"
                        className="hidden md:block absolute -bottom-8 -left-8 w-48 h-64 object-cover shadow-xl"
                    />

                </div>

            </div>
        </section>
    );
};

export default About;
