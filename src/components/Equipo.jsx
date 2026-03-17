import React from 'react'
import docente1 from "../assets/docente-carlos.png";
import docente2 from "../assets/perfil-1.png";
import docente3 from "../assets/perfil-2.png";

import { Link } from "react-router-dom";

const Equipo = () => {
    return (
        <section className="px-6 md:px-16 py-20 bg-white text-black">

            <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-6">
                Equipo docente
            </h3>

            {/* Texto */}
            <div className="max-w-4xl mb-16">
                <h2 className="text-3xl md:text-4xl  mb-6 font-serif">
                    El Taller de Escultura Matutino
                </h2>

                <p className="text-neutral-600 leading-relaxed space-y-4">
                    El Taller de Escultura Matutino constituye una cátedra de la Licenciatura en Artes Visuales que integra la formación de estudiantes de tercer, cuarto y quinto año. Se organiza como una estructura vertical, con contenidos articulados de complejidad progresiva.

                    La propuesta centra su enfoque en el aprendizaje del lenguaje plástico visual en el espacio tridimensional, combinando teoría y práctica en procesos de producción artística. Desde una perspectiva constructivista, el hacer escultórico implica la experimentación con materiales y técnicas, así como la construcción de sentido en relación al contexto cultural.

                    El taller promueve la formación de artistas y gestores culturales, preparados para el desarrollo profesional tanto en proyectos individuales como en equipos interdisciplinarios.
                </p>
            </div>

            {/* Docentes */}
            <div className="grid md:grid-cols-2 gap-6">
            {/* Docentes */}
                <div className="flex items-center gap-4 p-4 border border-neutral-200 hover:border-neutral-500 transition duration-300">

                    <img
                        src={docente1}
                        className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                        <h4 className="font-medium">
                            Carlos Ariel Xamena
                        </h4>

                        <p className="text-sm text-neutral-500">
                            Profesor adjunto · Jefe de cátedra
                        </p>
                    </div>

                </div>
                                <div className="flex items-center gap-4 p-4 border border-neutral-200 hover:border-neutral-500 transition duration-300">

                    <img
                        src={docente2}
                        className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                        <h4 className="font-medium">
                            Aime Rodríguez
                        </h4>

                        <p className="text-sm text-neutral-500">
                            Docente Auxiliar
                        </p>
                    </div>

                </div>
                                <div className="flex items-center gap-4 p-4 border border-neutral-200 hover:border-neutral-500 transition duration-300">

                    <img
                        src={docente3}
                        className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                        <h4 className="font-medium">
                            Zoe Flores
                        </h4>

                        <p className="text-sm text-neutral-500">
                            Docente Auxiliar
                        </p>
                    </div>

                </div>



            </div>
            <div className="text-center mt-40">
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

export default Equipo