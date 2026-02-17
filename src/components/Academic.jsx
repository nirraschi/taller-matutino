import React from 'react'
import facultadImg from '../assets/facultad.jpeg'
import alumna1Img from '../assets/perfil-1.png'
import alumna2Img from '../assets/perfil-2.png'


const Academic = () => {
    return (
        <section className="py-28 bg-neutral-50"
        id='proyecto'>
            <div className="max-w-6xl mx-auto px-6">

                {/* ================= IMAGEN FACULTAD ================= */}

                <div className="mb-20">
                    <img
                        src={facultadImg}
                        className="w-full h-[420px] object-cover"
                    />
                </div>

                {/* ================= CONTENIDO INFERIOR ================= */}

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* TEXTO IZQUIERDA */}
                    <div>
                        <h3 className="text-4xl md:text-5xl font-serif mb-6">
                            Proyecto académico
                        </h3>

                        <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                            Este sitio web fue desarrollado en el marco de la formación
                            en la Facultad de Artes de la Universidad Nacional de Tucumán,
                            integrando producción artística y diseño digital.
                        </p>

                        <p className="text-sm text-neutral-500">
                            Facultad de Artes – Universidad Nacional de Tucumán
                        </p>
                    </div>

                    {/* CARDS DERECHA */}
                    <div className="space-y-8">

                        {/* Card 1 */}
                        <div className="flex items-start gap-5 pb-6 border-b border-neutral-200"
>

                            <img
                                src={alumna1Img}
                                className="w-14 h-14 object-cover rounded-full  hover:scale-105 transition duration-500"

                            />

                            <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
                                    Taller matutino
                                </p>

                                <h5 className="text-lg font-serif mb-1">
                                    Indira Candela Raschi
                                </h5>

                                <p className="text-sm text-neutral-700 leading-relaxed">
                                    Diseño y desarrollo web del proyecto.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-start gap-5 pb-6 border-b border-neutral-200"
>

                            <img
                                src={alumna2Img}
                                className="w-14 h-14 object-cover rounded-full "

                            />

                            <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
                                    Taller matutino
                                </p>

                                <h5 className="text-lg font-serif mb-1">
                                    Jessica Vega
                                </h5>

                                <p className="text-sm text-neutral-700 leading-relaxed">
                                    
                                    Dirección conceptual y desarrollo visual.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>



    )
}

export default Academic