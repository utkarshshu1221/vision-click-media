// src/pages/Contact.jsx
import SEO from "../components/SEO.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | VisionClick Midea"
        description="Start your project—reach out to VisionClick Midea today."
        url="https://visionclickmidea.com/contact"
      />
      <div className="page-content">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#cccccc", marginBottom: "3rem" }}>
            Ready to start your project? Get in touch with us today and let's discuss how we can help your business grow.
          </p>

          <div className="contact-container">
            <div className="contact-info">
              <h3 style={{ color: "#00ffff", marginBottom: "2rem" }}>Get In Touch</h3>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4 style={{ color: "#ffffff", marginBottom: ".5rem" }}>Email</h4>
                  <p id="contactEmail">visionclickmedia@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4 style={{ color: "#ffffff", marginBottom: ".5rem" }}>Phone</h4>
                  <p id="contactPhone">+917250153011</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4 style={{ color: "#ffffff", marginBottom: ".5rem" }}>Address</h4>
                  <p>Gola Road<br />Patna, Bihar 801503</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h4 style={{ color: "#ffffff", marginBottom: ".5rem" }}>Business Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" title="Facebook">📘</a>
                <a href="#" title="Twitter">🐦</a>
                <a href="#" title="LinkedIn">💼</a>
                <a href="#" title="Instagram">📷</a>
              </div>
            </div>

            <div className="contact-form">
              <h3 style={{ color: "#00ffff", marginBottom: "2rem" }}>Send us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
