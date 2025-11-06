import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">PeyekIT</h1>
        <nav className="flex gap-6">
          <Link className="hover:text-blue-600 transition" to="/">Home</Link>
          <Link className="hover:text-blue-600 transition" to="/about">Tentang</Link>
          <Link className="hover:text-blue-600 transition" to="/contact">Kontak</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 pt-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © 2025 My Landing Page
      </footer>
    </div>
  );
}
