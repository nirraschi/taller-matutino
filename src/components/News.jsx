import newsData from "../data/newsData";

const News = () => {
    return (
        <section className="py-28 mt-20">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">
                        Novedades
                    </h2>
                    <p className="text-neutral-600">
                        Registro de actividades y procesos del taller.
                    </p>
                </div>

                {/* Noticias */}
                {newsData.map((item) => (
                    <article
                        key={item.id}
                        className="pb-20 mb-20 border-b border-neutral-200 last:border-none"
                    >
                        {/* Fecha */}
                        <p className="text-sm text-neutral-500 mb-3">
                            {item.date}
                        </p>

                        {/* Título */}
                        <h3 className="text-2xl md:text-3xl font-serif mb-6">
                            {item.title}
                        </h3>

                        {/* Texto */}
                        <p className="text-neutral-700 leading-relaxed mb-10">
                            {item.text}
                        </p>

                        {/* Imágenes */}
                        <div className="grid grid-cols-2 gap-4">
                            {item.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className={`w-full h-64 object-cover ${i === item.images.length - 1 && item.images.length % 2 !== 0
                                            ? "col-span-2"
                                            : ""
                                        }`}
                                />
                            ))}
                        </div>
                    </article>
                ))}

            </div>
        </section>
    );
};

export default News;