import { useRef, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [messageEl, setMessageEl] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageEl(null);
    setLoading(true);
    setSubmitted(true);
    // Allow the native form submit to proceed to Google Forms (via hidden iframe target)
    e.currentTarget.submit();
  };

  const handleIframeLoad = () => {
    if (!submitted) return;
    setLoading(false);
    setSubmitted(false);
    setMessageEl(<div className="success-message">Thank you! Your message has been sent successfully. We'll get back to you soon.</div>);
    // Reset the visible form fields after successful submit
    const form = document.getElementById("contactForm");
    if (form) form.reset();
  };

  return (
    <>
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        ref={iframeRef}
        onLoad={handleIframeLoad}
        style={{ display: "none" }}
      ></iframe>
      <form
        id="contactForm"
        onSubmit={handleSubmit}
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfjl4sjcT8N6CZP95-K1icoGYdSEP0CWO59wGk73MfMVL6jkg/formResponse"
        method="POST"
        target="hidden_iframe"
      >
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="entry.1695024623" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="entry.364521164" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="entry.339658698" />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Interested In</label>
          <select id="service" name="entry.1850697840">
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
            <option value="mlm-software">MLM Software</option>
            <option value="game-development">Game Development</option>
            <option value="election-campaign">Election Campaign</option>
            <option value="loan-management">Loan Management Software</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="laundry-management">Laundry Management</option>
            <option value="seo">SEO</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="entry.429232032" placeholder="Tell us about your project..." required />
        </div>

        <button type="submit" className="btn-primary" id="submitBtn" disabled={loading}>
          <span id="submitText" style={{ display: loading ? "none" : "inline" }}>Send Message</span>
          <span id="submitLoading" className="loading" style={{ display: loading ? "inline-block" : "none" }}></span>
        </button>

        <div id="formMessage">{messageEl}</div>
      </form>
    </>
  );
}
