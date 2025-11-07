export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16">
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-100/70 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            Hubungi Kami
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Siap Menyediakan Peyek Terbaik untuk Anda
          </h1>
          <p className="mt-3 text-slate-500">
            Kami dengan senang hati membantu kebutuhan camilan Anda. Silakan
            kirim pesan atau hubungi kami melalui kanal di bawah ini.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Kontak Langsung
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Tim kami tersedia pada hari Senin–Sabtu pukul 08.00–20.00 WIB.
              Jangan ragu untuk menjadwalkan kunjungan ke dapur produksi kami.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Alamat</p>
                <p className="mt-1">Cikarang Selatan, Bekasi</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Telepon &amp; WhatsApp
                </p>
                <a
                  href="tel:+6281234567890"
                  className="mt-1 block text-blue-600 hover:text-blue-700"
                >
                  +62 812-3456-7890
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <a
                  href="mailto:halo@peyekit.id"
                  className="mt-1 block text-blue-600 hover:text-blue-700"
                >
                  halo@peyekit.id
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
              <p className="text-sm text-white/80">
                “Kami siap membantu menyediakan peyek terbaik untuk acara
                keluarga, kantor, hingga hampers spesial. Tinggalkan pesan dan
                kami akan segera menghubungi Anda.”
              </p>
              <p className="mt-3 text-sm font-semibold">— Tim Peyek Andien</p>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Kirim Pesan
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Isi formulir ini dan kami akan menanggapi dalam 1×24 jam kerja.
            </p>

            <div className="mt-6 space-y-5 text-sm">
              <label className="block">
                <span className="text-slate-600">Nama Lengkap</span>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="text-slate-600">Email</span>
                <input
                  type="email"
                  placeholder="email@domain.id"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block">
                <span className="text-slate-600">Pesan</span>
                <textarea
                  rows={4}
                  placeholder="Ceritakan kebutuhan Anda"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
