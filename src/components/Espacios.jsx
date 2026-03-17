import espacio1 from "../assets/espacio1.jpg"
import espacio2 from "../assets/espacio2.jpg"
import { Link } from "react-router-dom";

export default function Spaces() {
    return (
        <section className="px-6 md:px-16 py-20 bg-white text-black mt-20">

            {/* Título */}
            <div className="max-w-full mb-12">
                <h2 className="text-3xl md:text-4xl mb-4 font-serif">
                    Espacios verdes
                </h2>
                {/* Descripción */}
                <p className="max-w-full text-neutral-600 leading-relaxed">
                    Los espacios verdes del taller cumplen un rol fundamental dentro de las actividades del programa.
                    Muchas de las prácticas implican el trabajo con materiales como cemento, cal y el uso de hornos,
                    procesos que generan polvo y requieren ventilación. Estos entornos abiertos permiten desarrollar
                    las producciones de manera más adecuada, acompañando el hacer escultórico en relación con el espacio.
                </p>
            </div>

            {/* Imágenes */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
                <img
                    src={espacio1}
                    className="w-full h-[300px] md:h-[350px] object-cover rounded-xl"
                />

                <img
                    src={espacio2}
                    className="w-full h-[300px] md:h-[350px] object-cover rounded-xl"
                />
            </div>



            <div className="text-center">
                <Link
                    to="/"
                    className="px-6 py-2 border border-black hover:bg-black hover:text-white transition"
                >
                    Volver al inicio
                </Link>
            </div>




        </section>
    )
}