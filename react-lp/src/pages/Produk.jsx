import { Link } from "react-router-dom";

export default function Produk() {
  const products = [
    {
      title: "Peyek Kacang",
      description:
        "Perpaduan klasik adonan peyek yang renyah dan garing, dipadukan dengan gurihnya kacang tanah pilihan.",
      price: 12000,
      image: "kacang2.png",
    },
    {
      title: "Peyek Kacang Hijau",
      description:
        "Sensasi unik peyek gurih dengan taburan kacang hijau yang renyah dan khas di setiap gigitan.",
      price: 12000,
      image: "kacang ijo2.png",
    },
    {
      title: "Peyek Udang Rebon",
      description:
        "Cita rasa gurih dan renyah dengan aroma sedap udang rebon asli, memberikan rasa laut yang nikmat.",
      price: 12000,
      image: "rebon2.png",
    },
  ];
  return (
    <section id="produk" className="relative overflow-hidden bg-white py-20">
      <div
        className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-blue-100/70 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            Produk Unggulan
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Varian Peyek Favorit Keluarga Indonesia
          </h1>
          <p className="mt-4 text-slate-500">
            Setiap kemasan diproses dengan teliti untuk menjaga kerenyahan dan
            keaslian rasa. Pilih varian yang paling pas untuk momen kebersamaan
            Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-blue-700 backdrop-blur">
                  Favorit keluarga
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-lg font-semibold text-blue-600">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-blue-600 px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    Pesan Sekarang
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
