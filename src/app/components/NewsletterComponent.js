"use client";

import React, { useState } from "react";

const NewsletterComponent = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("Please enter a valid email.");
      return;
    }

    // Placeholder success
    setStatus("✅ Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter for the latest insights and industry updates.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>

        {status && (
          <p className="newsletter-message">
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterComponent;
