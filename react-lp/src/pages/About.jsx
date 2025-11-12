import { useI18n } from "../i18n.jsx";
const buildMilestones = (t) => [
  {
    year: "1999",
    title: t("about_m1_title"),
    description: t("about_m1_desc"),
  },
  {
    year: "2010",
    title: t("about_m2_title"),
    description: t("about_m2_desc"),
  },
  {
    year: "2018",
    title: t("about_m3_title"),
    description: t("about_m3_desc"),
  },
  {
    year: "2024",
    title: t("about_m4_title"),
    description: t("about_m4_desc"),
  },
];

export default function About() {
  const { t } = useI18n();
  const milestones = buildMilestones(t);
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
              {t("about_badge")}
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              {t("about_title")}
            </h1>
            <p className="text-base leading-relaxed text-slate-600">
              {t("about_p1")}
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              {t("about_p2")}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
            <h2 className="text-lg font-semibold text-slate-900">
              {t("about_milestones")}
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
