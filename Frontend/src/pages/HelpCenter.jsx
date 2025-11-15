// src/pages/HelpCenter.jsx
import SEO from "../components/SEO.jsx";

export default function HelpCenter() {
  return (
    <>
      <SEO
        title="Help Center | VisionClick Media"
        description="Get help and support for VisionClick Media services. Find answers to frequently asked questions and contact our support team."
        url="https://visionclickmedia.digital/help-center"
      />
      <div className="page-content">
        <div className="container">
          <h1 className="section-title">Help Center</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#cccccc", marginBottom: "3rem" }}>
            Find answers to common questions and get the support you need
          </p>

          <div style={{ maxWidth: 900, margin: "0 auto", color: "#cccccc", lineHeight: 1.8 }}>
            <section style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "#00ffff", marginBottom: "1rem", fontSize: "1.5rem" }}>Frequently Asked Questions</h2>
              
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#ffffff", marginTop: "1.5rem", marginBottom: "0.5rem" }}>What services does VisionClick Media offer?</h3>
                <p style={{ marginBottom: "1rem" }}>
                  We offer a comprehensive range of digital services including web development, app development, digital marketing, e-commerce solutions, SEO services, MLM software, game development, and more. Visit our <a href="/services" style={{ color: "#00ffff" }}>Services page</a> to learn more.
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#ffffff", marginTop: "1.5rem", marginBottom: "0.5rem" }}>How long does it take to complete a project?</h3>
                <p style={{ marginBottom: "1rem" }}>
                  Project timelines vary depending on the scope and complexity of the project. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. We provide detailed timelines during our initial consultation.
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#ffffff", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Do you provide ongoing support after project completion?</h3>
                <p style={{ marginBottom: "1rem" }}>
                  Yes, we offer ongoing support and maintenance services. We provide 24/7 support to ensure your digital solutions continue to perform optimally. Contact us to learn about our support packages.
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#ffffff", marginTop: "1.5rem", marginBottom: "0.5rem" }}>What is your pricing model?</h3>
                <p style={{ marginBottom: "1rem" }}>
                  Our pricing is customized based on your specific needs and project requirements. We offer competitive pricing and flexible payment options. <a href="/contact" style={{ color: "#00ffff" }}>Contact us</a> for a free quote.
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#ffffff", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Can you work with existing systems or platforms?</h3>
                <p style={{ marginBottom: "1rem" }}>
                  Yes, we can integrate with existing systems and platforms. Our team has experience working with various technologies and can help migrate or integrate your current systems with new solutions.
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#ffffff", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Do you provide training for the solutions you build?</h3>
                <p style={{ marginBottom: "1rem" }}>
                  Yes, we provide comprehensive training sessions to help your team understand and effectively use the solutions we develop. Training can be conducted in-person or remotely.
                </p>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#ffffff", marginTop: "1.5rem", marginBottom: "0.5rem" }}>What technologies do you use?</h3>
                <p style={{ marginBottom: "1rem" }}>
                  We use modern, industry-standard technologies including React, Node.js, Python, PHP, and various frameworks. We choose the best technology stack based on your project requirements.
                </p>
              </div>
            </section>

            <section style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "#00ffff", marginBottom: "1rem", fontSize: "1.5rem" }}>Getting Started</h2>
              <p style={{ marginBottom: "1rem" }}>
                Ready to start your project? Here's how:
              </p>
              <ol style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
                <li>Contact us through our <a href="/contact" style={{ color: "#00ffff" }}>contact form</a> or email</li>
                <li>Schedule a free consultation to discuss your project</li>
                <li>Receive a detailed proposal and quote</li>
                <li>Approve the project and we'll begin development</li>
                <li>Regular updates and communication throughout the project</li>
                <li>Launch and ongoing support</li>
              </ol>
            </section>

            <section style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "#00ffff", marginBottom: "1rem", fontSize: "1.5rem" }}>Contact Support</h2>
              <p style={{ marginBottom: "1rem" }}>
                Still have questions? Our support team is here to help you 24/7.
              </p>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "10px", marginTop: "1rem" }}>
                <p style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> visionclickmedia@gmail.com</p>
                <p style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> +917250153011</p>
                <p style={{ marginBottom: "0.5rem" }}><strong>Business Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM | Sat - Sun: 10:00 AM - 4:00 PM</p>
                <p style={{ marginTop: "1rem" }}>
                  <a href="/contact" className="btn-primary" style={{ display: "inline-block", textDecoration: "none" }}>Contact Us</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

