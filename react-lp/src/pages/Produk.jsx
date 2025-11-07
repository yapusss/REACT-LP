export default function Produk() {
  
  const products = [
    {
      title: "Peyek Kacang",
      description: "Peyek kacang yang renyah dan lezat.",
      price: 20000,
      image: "path/to/image.jpg"
    },
    {
      title: "Peyek Kacang Hijau",
      description: "Peyek kacang hijau yang gurih dan renyah.",
      price: 15000,
      image: "path/to/image.jpg"
    },
    {
      title: "Peyek Udang Rebon",
      description: "Peyek udang rebon yang gurih dan renyah.",
      price: 25000,
      image: "path/to/image.jpg"
    }
  ];
  return (
    <section className="w-full min-h-screen bg-gray-50 py-12 px-6 md:px-16 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
        Menu Peyek Kami
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
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-700">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}