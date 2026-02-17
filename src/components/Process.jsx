import processImage from "../assets/escultura.jpeg";


const Process = () => {
    return (
        <section className="py-28 bg-white"
        id="taller">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Imagen */}
                <div>
                    <img
                        src={processImage}
                        alt="Obra en proceso"
                        className="w-full object-cover shadow-lg"
                    />
                </div>

                {/* Texto */}
                <div>
                    <h3 className="text-4xl font-serif mb-6 leading-snug">
                        El proceso como eje de la formación
                    </h3>

                    <p className="text-lg leading-relaxed text-neutral-700">
                        En el Taller Matutino, el proceso es tan importante como el resultado final.
                        La búsqueda, la prueba, el error y la reflexión forman parte del recorrido
                        de cada estudiante.
                        <br /><br />
                        Cada obra atraviesa instancias de experimentación que construyen una mirada propia.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Process;

