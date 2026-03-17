import React from 'react'
import docente1 from "../assets/docente-carlos.png";
import docente2 from "../assets/usuario.png";
import docente3 from "../assets/docente-zoe.jpeg";
import puerta from "../assets/puerta.jpeg";

import { Link } from "react-router-dom";

const Equipo = () => {
    return (
        <section className="bg-white text-black mt-20">

            {/* HERO */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={puerta}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-serif text-center px-6">
                        Equipo docente
                    </h1>
                </div>
            </div>

            {/* CONTENIDO */}
            <div className="px-6 md:px-16 py-20">

                {/* Texto */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-3xl md:text-4xl mb-8 font-serif">
                        El Taller de Escultura Matutino
                    </h2>
                    <div className="w-16 h-[2px] bg-amber-400 mb-8" />

                    <div className="text-neutral-600 leading-relaxed space-y-6">
                        <p>
                            Constituye una cátedra que dicta contenidos curriculares del área – Practica artística, integrando en su trayecto de formación, el cursado del tercero, el cuarto y el quinto año. Se concibe como una estructura vertical, con enseñanza de contenidos articulados de complejidad gradual y progresiva.
                        </p>

                        <p>
                            La propuesta de taller dentro de la licenciatura en artes visuales, centra su especificidad en el aprendizaje de la teoría y la praxis del discurso plástico visual con acento en la producción de obras en relación al espacio tridimensional.
                        </p>

                        <p>
                            Asume una concepción constructivista del proceso de enseñanza, donde el hacer implica actualizar paradigmas de producción artística presentes en el contexto cultural.
                        </p>

                        <p>
                            Este hacer escultórico implica la transformación de materiales mediante diversos procedimientos y técnicas, para la producción de objetos, instalaciones o situaciones artísticas cargadas de significado.
                        </p>

                        <p>
                            La propuesta concibe a los estudiantes como artistas y gestores culturales en formación, preparándolos para su futuro desempeño profesional.
                        </p>
                    </div>
                </div>

                {/* DOCENTES */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* DOCENTE 1 */}
                    <div className="border border-neutral-200 hover:shadow-xl transition duration-300">
                        <img
                            src={docente1}
                            className="w-full h-72 object-cover"
                            style={{ objectPosition: "50% 20%" }}
                        />

                        <div className="p-6">
                            <h4 className="text-xl font-serif mb-2">
                                Carlos Ariel Xamena
                            </h4>

                            <p className="text-sm text-neutral-500 mb-4">
                                Profesor adjunto · Jefe de cátedra
                            </p>

                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Es licenciado en artes plásticas. Responsable de la coordinación y enseñanza de las áreas que integran el programa de catedra, así también coordina el Laboratorio de Materiales que involucra practicas experimentales de producción e investigación en técnicas y procedimientos del hacer escultórico.
                                Integra el Proyecto PIUNT “Patrimonio artístico y museología. Las escenas artísticas, la escultura y el arte urbano en Tucumán
                                Es docente extensionista, vinculado al arte público.
                                Maestrando por la Unicen desde 2024 a la fecha.

                            </p>
                        </div>
                    </div>

                    {/* DOCENTE 2 */}
                    <div className="border border-neutral-200 hover:shadow-xl transition duration-300">
                        <img
                            src={docente2}
                            className="w-full h-72 object-contain"
                        />

                        <div className="p-6">
                            <h4 className="text-xl font-serif mb-2">
                                Aime Rodríguez
                            </h4>

                            <p className="text-sm text-neutral-500 mb-4">
                                Docente auxiliar
                            </p>

                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Docente del taller que acompaña los procesos de formación en escultura, participando en las actividades prácticas y en el seguimiento de los proyectos de los estudiantes.
                            </p>
                        </div>
                    </div>

                    {/* DOCENTE 3 */}
                    <div className="border border-neutral-200 hover:shadow-xl transition duration-300">
                        <img
                            src={docente3}
                            className="w-full h-72 object-cover"
                        />

                        <div className="p-6">
                            <h4 className="text-xl font-serif mb-2">
                                Zoe Flores
                            </h4>

                            <p className="text-sm text-neutral-500 mb-4">
                                Docente auxiliar
                            </p>

                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Licenciada en artes plásticas por la Universidad Nacional de Tucumán, actualmente cursa el doctorado en Humanidades de la Facultad de Filosofía y Letras de la misma casa de estudios. Es miembro del Instituto de Investigaciones sobre cultura Popular.
                                Forma parte del Proyecto PIUNT “Patrimonio artístico y museología. Las escenas artísticas, la escultura y el arte urbano en Tucumán”, y se desempeña como docente en la Facultad de Artes en el Taller de Escultura - TM “Lorenzo Domínguez”.
                                Ha participado en diversos proyectos de elaboración y restauración escultórica, y colabora activamente en proyectos vinculados al patrimonio y la arqueología.
                            </p>
                        </div>
                    </div>

                </div>

                {/* BOTÓN */}
                <div className="text-center mt-24">
                    <Link
                        to="/"
                        className="px-6 py-3 border border-black hover:bg-black hover:text-white transition"
                    >
                        Volver al inicio
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Equipo