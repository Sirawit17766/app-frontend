
import { useParams } from "react-router-dom";
import "./courseDetail.css";

const courseData = {
  1: {
    title: "Course 1",
    description:
      "เซตอาหารญี่ปุ่นระดับ Premium ประกอบด้วยวัตถุดิบสดใหม่จากญี่ปุ่น",
    items: [
      "ซาชิมิรวม",
      "ซูชิพรีเมียม",
      "ข้าวหน้าเนื้อวากิว",
    ],
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754",
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  return (
    <div className="home">
        {/* Header */}
        <header className="header">
        <div className="logo">🐱</div>
        <nav className="nav">
            <a href="/">Home</a>
            <a href="#">Promotion</a>
            <a href="#">Course</a>
            <a href="#">予約XX</a>
        </nav>
        </header>

        {/* Main */}
        <main className="main">
        <div className="detail-container">
            {/* Left */}
            <div className="detail-left">
            <img src={course.image} alt={course.title} />

            <div className="title-wrapper">
                <h1 className="title">Mochio</h1>
                <p className="subtitle">Restaurant</p>
            </div>
            </div>

            {/* Right */}
            <div className="detail-right">
            <h2>{course.title}</h2>
            <p>{course.description}</p>

            <ul>
                {course.items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>

            <button className="reserve-btn">จอง</button>
            </div>
        </div>
        </main>

        <footer className="footer">Contact ☎</footer>
    </div>
    );
}