// src/pages/Portfolio.jsx
import { useMemo, useState } from "react";
import SEO from "../components/SEO.jsx";

const data = [
  { cat: "web", icon: "🌐", title: "Corporate Website Redesign", tag: "Web Development", desc: "Complete redesign with modern UI/UX and performance" },
  { cat: "app", icon: "📱", title: "Fitness Tracking App", tag: "Mobile Development", desc: "Workouts, nutrition, and social features" },
  { cat: "ecommerce", icon: "🛍️", title: "Fashion E-Commerce Platform", tag: "E-Commerce", desc: "AR try-on and personalized recommendations" },
  { cat: "marketing", icon: "📊", title: "Digital Marketing Campaign", tag: "Digital Marketing", desc: "Revenue growth by 300%" },
  { cat: "web", icon: "🏥", title: "Healthcare Management System", tag: "Web Development", desc: "Records and appointment scheduling" },
  { cat: "app", icon: "🍕", title: "Food Delivery App", tag: "Mobile Development", desc: "Real-time tracking and multiple payments" },
];

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "app", label: "Mobile" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "marketing", label: "Marketing" },
];

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const items = useMemo(() => (active === "all" ? data : data.filter(d => d.cat === active)), [active]);

  return (
    <>
      <SEO
        title="Portfolio | VisionClick Midea"
        description="Explore recent projects across web, mobile, ecommerce, and marketing."
        url="https://visionclickmidea.com/portfolio"
      />
      <div className="page-content">
        <div className="container">
          <h1 className="section-title">Our Portfolio</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#cccccc", marginBottom: "3rem" }}>
            Explore our recent projects and see how we’ve helped businesses achieve their digital goals.
          </p>

          <div className="portfolio-filters">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${active === f.key ? "active" : ""}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {items.map((item) => (
              <div className="portfolio-item" key={item.title}>
                <div className="portfolio-image">{item.icon}</div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <div className="portfolio-category">{item.tag}</div>
                  <p className="portfolio-description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
