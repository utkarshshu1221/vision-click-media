export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 id="footerCompanyName">VisionClick Midea</h3>
          <p>We are a passionate team of developers, designers, and digital marketers dedicated to helping businesses thrive in the digital world.</p>
          <div className="social-links">
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="LinkedIn">💼</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="YouTube">📺</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="/services">Web Development</a></li>
            <li><a href="/services">App Development</a></li>
            <li><a href="/services">Digital Marketing</a></li>
            <li><a href="/services">E-Commerce</a></li>
            <li><a href="/services">SEO Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="/contact">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2025 © <span id="footerCompanyName2">VisionClick Midea</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
