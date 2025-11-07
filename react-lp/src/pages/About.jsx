const milestones = [
  {
    year: "1999",
    title: "Awal Perjalanan",
    description:
      "Memulai usaha rumahan dengan resep keluarga yang diwariskan turun-temurun dari generasi sebelumnya.",
  },
  {
    year: "2010",
    title: "Ekspansi Produksi",
    description:
      "Membuka fasilitas produksi modern dan memperkenalkan kontrol kualitas digital pertama kami.",
  },
  {
    year: "2018",
    title: "Digitalisasi",
    description:
      "Membangun sistem pemesanan online serta memperluas distribusi ke seluruh Indonesia.",
  },
  {
    year: "2024",
    title: "Peyek Andien",
    description:
      "Meluncurkan identitas baru dengan fokus pada inovasi rasa dan pengalaman pelanggan yang lebih modern.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-blue-100 via-white to-white"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
              Tentang Kami
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Meracik Keripik Peyek Terbaik Sejak Tahun 1999
            </h1>
            <p className="text-base leading-relaxed text-slate-600">
              Berdiri dari dapur kecil di Yogyakarta, Peyek Andien lahir dari
              kecintaan keluarga kami terhadap cita rasa Nusantara. Kami percaya
              bahwa makanan terbaik dibuat dengan hati, bahan pilihan, dan
              sentuhan teknologi untuk memastikan kualitasnya selalu konsisten.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Kini kami menggabungkan resep klasik dengan proses modern. Setiap
              peyek digoreng menggunakan pengontrol suhu digital dan dibungkus
              secara higienis, sehingga tetap renyah dan gurih hingga ke tangan
              Anda.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
            <h2 className="text-lg font-semibold text-slate-900">
              Tonggak Perjalanan
            </h2>
            <ol className="mt-6 space-y-6">
              {milestones.map((item) => (
                <li key={item.year} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-blue-500 bg-blue-100" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
