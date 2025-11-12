import { Link } from "react-router-dom";
import { useI18n } from "../i18n.jsx";

const buildStats = (t) => [
  { label: t("home_stat_years"), value: "25+" },
  { label: t("home_stat_flavors"), value: "10" },
  { label: t("home_stat_happy"), value: "15K" },
];

const buildHighlights = (t) => [
  {
    title: t("home_highlight_1_title"),
    description: t("home_highlight_1_desc"),
  },
  {
    title: t("home_highlight_2_title"),
    description: t("home_highlight_2_desc"),
  },
  {
    title: t("home_highlight_3_title"),
    description: t("home_highlight_3_desc"),
  },
];

export default function Home() {
  const { t } = useI18n();
  const stats = buildStats(t);
  const highlights = buildHighlights(t);
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:py-24">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
              {t("home_badge")}
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {t("home_title")}
            </h1>
            <p className="max-w-xl text-white/80">{t("home_desc")}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/produk"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg shadow-blue-900/40 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                {t("home_view_products")}
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                {t("home_our_story")}
              </Link>
            </div>
          </div>

          <div className="relative flex-1">
            <div
              className="absolute -top-16 -right-8 h-72 w-72 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-md rounded-3xl bg-white/10 p-5 shadow-2xl shadow-blue-900/40 backdrop-blur">
              <div className="rounded-2xl bg-white/90 p-4">
                <img
                  src="kacang2.png"
                  alt="Peyek kacang renyah"
                  className="h-64 w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {t("home_why_title")}
          </h2>
          <p className="mt-4 text-slate-500">{t("home_why_desc")}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-0 transition group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
