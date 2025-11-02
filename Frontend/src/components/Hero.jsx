// src/components/Hero.jsx
import ParticleBackground from "./ParticleBackground.jsx";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <ParticleBackground />
      <div className="hero-content">
        <h1 className="hero-title">Empowering Businesses Through Code & Creativity</h1>
        <p className="hero-subtitle">Professional Web Development and Digital Marketing that drives results</p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">Get Started</Link>
          <Link to="/services" className="btn-secondary">Explore Services</Link>
        </div>
      </div>
    </section>
  );
}
