import { FaWhatsapp } from "react-icons/fa";
import { useI18n } from "../i18n.jsx";
export default function Contact() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16">
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-100/70 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            {t("contact_badge")}
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            {t("contact_title")}
          </h1>
          <p className="mt-3 text-slate-500">{t("contact_desc")}</p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-1">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {t("contact_direct")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {t("contact_po_note")}
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">
                  {t("contact_address_label")}
                </p>
                <p className="mt-1">{t("contact_address_value")}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {t("contact_phone_label")}
                </p>

                <p className="mt-1">{t("contact_phone_value")}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {t("contact_email_label")}
                </p>
                <a
                  href="mailto:halo@peyekit.id"
                  className="mt-1 block text-blue-600 hover:text-blue-700"
                >
                  {t("contact_email_value")}
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
              <p className="text-sm text-white/80">{t("contact_quote")}</p>
              <p className="mt-3 text-sm font-semibold">
                {t("contact_quote_by")}
              </p>
            </div>

            <a
              href="https://wa.me/6281218551924?text=Halo,%20saya%20tertarik%20untuk%20memesan%20peyek."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <FaWhatsapp className="h-5 w-5" />
              {t("contact_whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
