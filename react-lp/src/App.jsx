import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header style={{ textAlign: "center", padding: "1rem" }}>
        <Link to="/">Home</Link>
      </header>

      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>

      <footer style={{ textAlign: "center", padding: "1rem" }}>
        © 2025 My Landing Page. All rights reserved.
      </footer>
    </div>
  );
}
