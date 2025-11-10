import { FaWhatsapp } from "react-icons/fa";
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

        <div className="mt-12 grid gap-10 md:grid-cols-1">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Kontak Langsung
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Pemesanan harus dilakukan melalui pre-order (PO) dan tidak dapat
              datang langsung ke dapur produksi. Pesanan dilakukan minimal 1
              hari sebelumnya dan layanan kami tersedia 24 jam.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Alamat</p>
                <p className="mt-1">📍Cikarang Selatan, Bekasi</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Telepon &amp; WhatsApp
                </p>

                <p className="mt-1">📱+62 812-1855-1924</p>
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

            <a
              href="https://wa.me/6281218551924?text=Halo,%20saya%20tertarik%20untuk%20memesan%20peyek."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <FaWhatsapp className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}