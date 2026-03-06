import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./courseDetail.css";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const displayNum = location.state?.displayNum ?? id; // ใช้ index จาก home, fallback เป็น id
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:8080/api/menus/${id}`);
        if (!res.ok) throw new Error("ไม่พบเมนูนี้");
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="cd-loading">
        <div className="cd-loader-ring" />
        <p>กำลังโหลด...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="cd-loading">
        <p className="cd-error-msg">⚠ {error || "ไม่พบข้อมูล"}</p>
      </div>
    );
  }

  return (
    <div className="course-detail-page">

      {/* ── Header (same style as home) ── */}
      <header className="cd-header">
        <a className="cd-logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <span className="cd-logo-wordmark">Mochio</span>
          <span className="cd-logo-sep" />
          <span className="cd-logo-sub">Restaurant</span>
        </a>
        <button className="cd-back-btn" onClick={() => navigate(-1)}>
          ‹ &nbsp; Back
        </button>
      </header>

      {/* ── Body ── */}
      <div className="cd-body">
        <div className="cd-wrapper">
          <div className="cd-accent" />

          {/* ── Hero image (full width, tall) ── */}
          <div className="cd-image-panel">
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&q=85"
              alt={course.menuName}
            />
            <div className="cd-image-overlay" />

            {/* Course number */}
            <span className="cd-course-num">No.{String(displayNum).padStart(2, "0")}</span>

            {/* Price badge */}
            <div className="cd-price-badge">
              <span className="cd-price-label">ราคา</span>
              <span className="cd-price-value">
                ฿ {Number(course.menuPrice).toLocaleString()}
              </span>
            </div>

            {/* Title overlaid on image */}
            <div className="cd-image-title-block">
              <div className="cd-id-tag">Course #{displayNum}</div>
              <h2 className="cd-title">{course.menuName}</h2>
            </div>
          </div>

          {/* ── Content below image ── */}
          <div className="cd-content">
            <div className="cd-divider">
              <span />
              <span className="cd-divider-icon">✦</span>
              <span />
            </div>

            <p className="cd-desc">{course.menuDetail}</p>

            <div className="cd-info-grid">
              <div className="cd-info-card">
                <span className="cd-info-icon">🌊</span>
                <div className="cd-info-text">
                  <span>วัตถุดิบสด</span>
                  <span className="cd-info-sub">นำเข้าจากญี่ปุ่น</span>
                </div>
              </div>
              <div className="cd-info-card">
                <span className="cd-info-icon">👨‍🍳</span>
                <div className="cd-info-text">
                  <span>เชฟมืออาชีพ</span>
                  <span className="cd-info-sub">ประสบการณ์ 15+ ปี</span>
                </div>
              </div>
              <div className="cd-info-card">
                <span className="cd-info-icon">⏱</span>
                <div className="cd-info-text">
                  <span>เวลาเสิร์ฟ</span>
                  <span className="cd-info-sub">~45 นาที</span>
                </div>
              </div>
            </div>

            <button className="cd-reserve-btn">
              <span>จองโต๊ะ</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="cd-footer">
        <span className="cd-footer-copy">© 2025 Mochio Restaurant</span>
      </footer>
    </div>
  );
}