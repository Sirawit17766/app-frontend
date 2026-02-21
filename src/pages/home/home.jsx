import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">🐱</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Promotion</a>
          <a href="#">Course</a>
          <a href="#">予約XX</a>
        </nav>
      </header>

      {/* Main */}
      <main className="main">
        <div className="title-wrapper">
          <h1 className="title">Mochio</h1>
          <p className="subtitle">Restaurant</p>
        </div>

        <h2 className="course-title">Course</h2>

        <div className="course-grid">
          <div className="card" onClick={() => navigate("/course/1")}>
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754"
              alt="Course 1"
            />
            <p>Course 1</p>
          </div>

          <div className="card" onClick={() => navigate("/course/2")}>
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
              alt="Course 2"
            />
            <p>Course 2</p>
          </div>

          <div className="card" onClick={() => navigate("/course/3")}>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Course 3"
            />
            <p>Course 3</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">Contact ☎</footer>
    </div>
  );
}
