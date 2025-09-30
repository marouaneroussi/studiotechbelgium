import React from "react";

const NewsletterComponent = () => {
  return (
    <>
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter for the latest insights and industry
            updates.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewsletterComponent;
