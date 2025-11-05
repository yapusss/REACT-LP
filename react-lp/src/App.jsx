
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">Tentang</Link>
        <Link to="/contact">Kontak</Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
        © 2025 My Landing Page
      </footer>
    </div>
  );
}
