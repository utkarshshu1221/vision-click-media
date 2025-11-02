// src/pages/About.jsx
import SEO from "../components/SEO.jsx";

export default function About() {
  return (
    <>
      <SEO
        title="About | VisionClick Midea"
        description="We’re a team of developers, designers, and marketers building future-ready digital experiences."
        url="https://visionclickmidea.com/about"
      />
      <div className="page-content">
        <div className="container">
          <div className="about-hero">
            <h1 className="section-title">About Our Agency</h1>
            <p style={{ fontSize: "1.2rem", color: "#cccccc", maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
              We are a passionate team of developers, designers, and digital marketers dedicated to helping businesses thrive in the digital world. With years of experience and cutting-edge technology, we deliver solutions that drive real results.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-number">200+</div><div className="stat-label">Projects Completed</div></div>
            <div className="stat-card"><div className="stat-number">50+</div><div className="stat-label">Happy Clients</div></div>
            <div className="stat-card"><div className="stat-number">5+</div><div className="stat-label">Years Experience</div></div>
            <div className="stat-card"><div className="stat-number">24/7</div><div className="stat-label">Support Available</div></div>
          </div>
          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <h2 style={{ color: "#00ffff", marginBottom: "2rem" }}>Our Mission</h2>
            <p style={{ fontSize: "1.1rem", color: "#cccccc", maxWidth: 700, margin: "0 auto", lineHeight: 1.7 }}>
              To empower businesses with innovative digital solutions that not only meet their current needs but also prepare them for future growth. We believe in building long-term partnerships and delivering exceptional value through every project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
