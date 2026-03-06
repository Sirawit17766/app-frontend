import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      label: "Course I",
      src: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    },
    {
      id: 2,
      label: "Course II",
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    },
    {
      id: 3,
      label: "Course III",
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  ];

  return (
    <div className="home">

      {/* ── Topbar ── */}
      <header className="header">
        {/* Logo — text only, ชื่อใหญ่ขึ้น */}
        <div className="logo">
          <span className="logo-wordmark">Mochio</span>
          <span className="logo-sep" />
          <span className="logo-sub">Restaurant</span>
        </div>

        {/* Nav */}
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Promotion</a>
          <a href="#">Course</a>
          <a href="#" className="nav-cta">Peem &nbsp;›</a>
        </nav>
      </header>

      {/* ── Main ── */}
      <main className="main">

        <div className="title-wrapper">
          <h1 className="title">Mochio</h1>
          <p className="subtitle">Restaurant</p>
        </div>

        <div className="ornament">
          <span className="ornament-dot" />
          <span className="ornament-line" />
          <span className="ornament-diamond" />
          <span className="ornament-line" />
          <span className="ornament-dot" />
        </div>

        <h2 className="course-title">Our Courses</h2>

        <div className="course-grid">
          {courses.map((c) => (
            <div
              key={c.id}
              className="card"
              onClick={() => navigate(`/course/${c.id}`)}
            >
              <span className="card-number">No.{String(c.id).padStart(2, "0")}</span>
              <img src={c.src} alt={c.label} />
              <div className="card-overlay" />
              <p>{c.label}</p>
            </div>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <a href="#" className="footer-contact">
          <span className="footer-contact-icon">☎</span>
          <span>Contact</span>
        </a>
        <span className="footer-copy">© 2025 Mochio Restaurant</span>
      </footer>
    </div>
  );
}