// src/pages/Services.jsx
import SEO from "../components/SEO.jsx";

const items = [
  { icon: "💻", title: "Web Development", desc: "Custom websites, web applications, and PWAs using React, Vue, Node.js" },
  { icon: "📱", title: "App Development", desc: "Native iOS/Android and cross-platform with React Native and Flutter" },
  { icon: "🔗", title: "MLM Software", desc: "Commission tracking, genealogy trees, and payment processing" },
  { icon: "🎮", title: "Game Development", desc: "Mobile and web games with Unity and HTML5 frameworks" },
  { icon: "🗳️", title: "Election Campaign", desc: "Digital campaign platforms, voter DBs, and candidate websites" },
  { icon: "💰", title: "Loan Management Software", desc: "Applications, approvals, and payment workflows" },
  { icon: "🛒", title: "E-Commerce", desc: "Stores with gateways, inventory, and CRM tools" },
  { icon: "🚀", title: "Digital Marketing", desc: "SEO, SMM, PPC, content, and analytics" },
  { icon: "🧺", title: "Laundry Management", desc: "Orders, customers, billing, and operations" },
  { icon: "🔍", title: "SEO", desc: "Visibility growth and organic traffic strategies" },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services | VisionClick Midea"
        description="Full-stack web, app, ecommerce, and marketing services tailored to your growth."
        url="https://visionclickmidea.com/services"
      />
      <div className="page-content">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#cccccc", marginBottom: "3rem", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            We offer comprehensive digital solutions to help your business succeed in today’s competitive market.
          </p>
          <div className="services-full-grid">
            {items.map((s) => (
              <div className="service-card-full" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-description">{s.desc}</p>
                <a href="/contact" className="btn-primary" style={{ marginTop: "1rem", display: "inline-block" }}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
