import img1 from "../assets/tool-1.jpeg";
import img2 from "../assets/tool-2.jpeg";
import img3 from "../assets/tool-3.jpeg";
import img4 from "../assets/tool-4.jpeg";
import img5 from "../assets/tool-5.jpeg";
import img6 from "../assets/tool-6.jpeg";

const tools = [
    {
        image: img1,
        title: "Morsa fija",
        description: "Para agarrar o prensar objetos."
    },
    {
        image: img2,
        title: "Herramientas",
        description: "Distintas pinzas, mazas y guantes de protección."
    },
    {
        image: img3,
        title: "Pulidora",
        description: "La utilizamos para pulir metal o hierro para no dejar partes punzantes o para estética del mismo."
    },
    {
        image: img4,
        title: "Plancha de hierro",
        description: "La utilizamos para crear nuestras propias herramientas, que pueden ser cinceles de hierro, específicamente para esculturas."
    },
    {
        image: img5,
        title: "Soldador de alta frecuencia"

    },
    {
        image: img6,
        title: "Herramientas de mano",
        description: "Sierras, destornilladores, clavos, gafas, guantes, entre otros."
    }
];

const Tools = () => {
    return (
        <section className="py-28 bg-white"
        id="herramientas">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h3 className="text-4xl md:text-5xl font-serif mb-6">
                        Herramientas y espacios de trabajo
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                        El taller cuenta con equipamiento y materiales que acompañan el
                        desarrollo técnico y experimental de cada estudiante.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6">

                    {tools.map((tool, index) => (
                        <div key={index} className="relative group overflow-hidden">

                            <img
                                src={tool.image}
                                alt=""
                                className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                            />

                            {/* Solo renderiza overlay si tiene título */}
                            {tool.title && (
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center px-4">
                                    <h4 className="text-xl mb-2">{tool.title}</h4>
                                    <p className="text-sm">{tool.description}</p>
                                </div>
                            )}

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Tools;
