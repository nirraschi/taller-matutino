import img1 from "../assets/gallery-1.jpeg";
import img2 from "../assets/gallery-2.jpeg";
import img3 from "../assets/gallery-3.jpeg";
import img4 from "../assets/gallery-4.jpeg";
import img5 from "../assets/gallery-5.jpeg";


const Gallery = () => {
    return (
        <section className="py-28 bg-neutral-50"
        id="imagenes">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 text-center">
                    <h3 className="text-4xl md:text-5xl font-serif mb-6">
                        El espacio en imágenes
                    </h3>
                    <p className="text-lg text-neutral-600">
                        Fragmentos del trabajo cotidiano dentro del Taller Matutino.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">

                    <img
                        src={img1}
                        alt="Estudiantes trabajando"
                        className="w-full h-full object-cover md:col-span-2 md:row-span-2 hover:scale-105 transition duration-500"
                    />

                    <img
                        src={img2}
                        alt="Detalle de materiales"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />

                    <img
                        src={img3}
                        alt="Espacio del taller"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />

                    <img
                        src={img5}
                        alt="Obras en proceso"
                        className="w-full h-full object-cover md:col-span-2 hover:scale-105 transition duration-500"
                    />
                    <img
                        src={img4}
                        alt="Detalle del espacio"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />

                </div>
            </div>
        </section>
    );
};

export default Gallery;
