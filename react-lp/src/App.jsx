import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "Tentang" },
  { to: "/produk", label: "Produk" },
  { to: "/contact", label: "Kontak" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-800 min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-semibold tracking-wide uppercase text-slate-600">
                Peyek Andien
              </span>
              <span className="text-sm text-slate-400">
                Rasa tradisional dengan sentuhan modern
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-slate-500"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Hubungi Kami
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col items-center justify-between h-4">
              <span
                className={`h-0.5 w-5 rounded-full transition ${
                  isMenuOpen
                    ? "translate-y-1.5 rotate-45 bg-blue-600"
                    : "bg-slate-500"
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full transition ${
                  isMenuOpen ? "opacity-0" : "bg-slate-500"
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full transition ${
                  isMenuOpen
                    ? "-translate-y-1.5 -rotate-45 bg-blue-600"
                    : "bg-slate-500"
                }`}
              />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3 text-sm font-medium">
              {links.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Hubungi Kami
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-white/70 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Peyek Andien. Semua hak cipta dilindungi.
      </footer>
    </div>
  );
}
