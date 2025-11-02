// src/components/ServicesPreview.jsx
import { Link } from "react-router-dom";

const items = [
  { icon: "💻", title: "Web Development", desc: "Custom websites and web applications built with modern technologies" },
  { icon: "📱", title: "App Development", desc: "Native and cross-platform mobile applications for iOS and Android" },
  { icon: "🚀", title: "Digital Marketing", desc: "Comprehensive digital marketing strategies to grow your business" },
  { icon: "🛒", title: "E-Commerce", desc: "Complete e-commerce solutions with payment integration" },
];

export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <h2 className="section-title">Our Core Services</h2>
      <div className="services-grid">
        {items.map((s) => (
          <Link to="/services" key={s.title} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-description">{s.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
