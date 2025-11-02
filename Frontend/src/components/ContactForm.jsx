import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [messageEl, setMessageEl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageEl(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone") || "",
      service: form.get("service") || "",
      message: form.get("message"),
      createdAt: new Date().toISOString(),
    };

    try {
      // Replace with your deployed Apps Script URL
      const res = await fetch("https://script.google.com/macros/s/AKfycbwjnW9C19elPMYiarkwx_VhRac6VIOdmrpy7vQEDZuI4yZGlmOk5SpJJYe7l2TAShoCgw/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.status === "success") {
        setMessageEl(<div className="success-message">Thank you! Your message has been sent successfully. We'll get back to you soon.</div>);
        e.currentTarget.reset();
      } else {
        setMessageEl(<div className="error-message">Sorry, there was an error sending your message. Please try again.</div>);
      }
    } catch {
      setMessageEl(<div className="error-message">Sorry, there was an error sending your message. Please try again.</div>);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service Interested In</label>
        <select id="service" name="service">
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
        <textarea id="message" name="message" placeholder="Tell us about your project..." required />
      </div>

      <button type="submit" className="btn-primary" id="submitBtn" disabled={loading}>
        <span id="submitText" style={{ display: loading ? "none" : "inline" }}>Send Message</span>
        <span id="submitLoading" className="loading" style={{ display: loading ? "inline-block" : "none" }}></span>
      </button>

      <div id="formMessage">{messageEl}</div>
    </form>
  );
}
