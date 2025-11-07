export default function Produk() {
  
  const products = [
    {
      title: "Peyek Kacang",
      description: "Perpaduan klasik adonan peyek yang renyah dan garing, dipadukan dengan gurihnya kacang tanah pilihan.",
      price: 12000,
      image: "kacang2.jpg"
    },
    {
      title: "Peyek Kacang Hijau",
      description: "Sensasi unik peyek gurih dengan taburan kacang hijau yang renyah dan khas di setiap gigitan.",
      price: 12000,
      image: "kacang ijo2.jpg"
    },
    {
      title: "Peyek Udang Rebon",
      description: "Cita rasa gurih dan renyah dengan aroma sedap udang rebon asli, memberikan rasa laut yang nikmat.",
      price: 12000,
      image: "rebon2.jpg"
    }
  ];
  return (
    <section className="w-full min-h-screen bg-gray-50 py-12 px-6 md:px-16 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
        Varian Peyek Kami
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              price={item.price}
              className="w-full h-48 sm:h-60 md:h-72 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-700">
                {item.title}
                <span className="text-blue-600"> - Rp {item.price.toLocaleString('id-ID')}</span>
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Lihat Detail
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}