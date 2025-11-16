// src/pages/Contact.jsx
import SEO from "../components/SEO.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | VisionClick Media"
        description="Start your project—reach out to VisionClick Media today."
        url="https://visionclickmedia.digital/contact"
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
                  <p id="contactPhone">+919430880858</p>
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
      {/* Map Location */}
      <div className="container" style={{ marginTop: "3rem" }}>
        <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>Our Location</h3>
        <div style={{ width: "100%", overflow: "hidden", borderRadius: "12px", border: "1px solid rgba(0,255,255,0.2)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.3820816392517!2d85.05578760000002!3d25.625441600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5657f2719701%3A0x390ffba0c38b8ae8!2sGola%20Rd%2C%20Patna%2C%20Danapur%2C%20Bihar%20801503!5e0!3m2!1sen!2sin!4v1762783094306!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VisionClick Media Location"
          ></iframe>
        </div>
      </div>
    </>
  );
}
