// src/pages/Services.jsx
import SEO from "../components/SEO.jsx";

// SVG Icons for each service
const ServiceIcons = {
  web: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  app: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="14" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="8" y="5" width="8" height="10" rx="1" fill="currentColor" opacity="0.3"/>
      <circle cx="12" cy="18" r="1" fill="currentColor"/>
    </svg>
  ),
  mlm: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="7" r="2" fill="currentColor"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <circle cx="12" cy="17" r="2" fill="currentColor"/>
    </svg>
  ),
  game: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
      <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"/>
      <path d="M8.5 13.5h7M12 10v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="1.5" fill="currentColor"/>
    </svg>
  ),
  election: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="18" cy="8" r="2.5" fill="currentColor" opacity="0.3"/>
      <path d="M16.5 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  loan: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="12" cy="6" r="2" fill="currentColor"/>
      <circle cx="12" cy="18" r="2" fill="currentColor"/>
    </svg>
  ),
  ecommerce: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M3 3h2l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L22 8H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  marketing: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M7 16l4-4 4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="7" cy="16" r="2" fill="currentColor"/>
      <circle cx="11" cy="12" r="2" fill="currentColor"/>
      <circle cx="15" cy="16" r="2" fill="currentColor"/>
      <circle cx="21" cy="10" r="2" fill="currentColor"/>
      <path d="M18 3v6M15 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  laundry: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.3"/>
      <path d="M7 7l10 10M17 7l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  seo: (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="11" cy="11" r="3" fill="currentColor" opacity="0.3"/>
      <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

const items = [
  { icon: ServiceIcons.web, title: "Web Development", desc: "Custom websites, web applications, and PWAs using React, Vue, Node.js" },
  { icon: ServiceIcons.app, title: "App Development", desc: "Native iOS/Android and cross-platform with React Native and Flutter" },
  { icon: ServiceIcons.mlm, title: "MLM Software", desc: "Commission tracking, genealogy trees, and payment processing" },
  { icon: ServiceIcons.game, title: "Game Development", desc: "Mobile and web games with Unity and HTML5 frameworks" },
  { icon: ServiceIcons.election, title: "Election Campaign", desc: "Digital campaign platforms, voter DBs, and candidate websites" },
  { icon: ServiceIcons.loan, title: "Loan Management Software", desc: "Applications, approvals, and payment workflows" },
  { icon: ServiceIcons.ecommerce, title: "E-Commerce", desc: "Stores with gateways, inventory, and CRM tools" },
  { icon: ServiceIcons.marketing, title: "Digital Marketing", desc: "SEO, SMM, PPC, content, and analytics" },
  { icon: ServiceIcons.laundry, title: "Laundry Management", desc: "Orders, customers, billing, and operations" },
  { icon: ServiceIcons.seo, title: "SEO", desc: "Visibility growth and organic traffic strategies" },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services | VisionClick Media"
        description="Full-stack web, app, ecommerce, and marketing services tailored to your growth."
        url="https://visionclickmedia.digital/services"
      />
      <div className="page-content">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#cccccc", marginBottom: "3rem", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            We offer comprehensive digital solutions to help your business succeed in today's competitive market.
          </p>
          <div className="services-full-grid">
            {items.map((s) => (
              <div className="service-card-full service-card-hover" key={s.title}>
                <div className="service-icon-wrapper">
                  <div className="service-icon-svg">{s.icon}</div>
                  <div className="service-hover-text">
                    <p className="service-description">{s.desc}</p>
                  </div>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <a href="/contact" className="btn-primary" style={{ marginTop: "1rem", display: "inline-block", textDecoration: "none" }}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .service-card-hover {
          text-align: center;
        }
        .service-icon-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
          width: 100%;
          min-height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .service-icon-svg {
          color: #00ffff;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
        }
        .service-icon-svg svg {
          width: 100%;
          height: 100%;
        }
        .service-hover-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(15px);
          padding: 1.25rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 255, 0.4);
          width: 90%;
          max-width: 300px;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
        }
        .service-hover-text .service-description {
          color: #ffffff;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          text-align: center;
        }
        .service-icon-wrapper:hover .service-icon-svg {
          opacity: 0.15;
          transform: scale(0.85);
        }
        .service-icon-wrapper:hover .service-hover-text {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%) scale(1);
        }
        .service-card-full:hover {
          transform: translateY(-8px);
        }
        .service-card-full:hover .service-icon-svg {
          color: #00ffff;
        }
        @media (max-width: 768px) {
          .service-hover-text {
            max-width: 250px;
            padding: 1rem;
          }
          .service-hover-text .service-description {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}
