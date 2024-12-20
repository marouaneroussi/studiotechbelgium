import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Solutions</h3>
          <ul className="footer-links">
            <li>
              <Link href="/solutions/televisionchannel">
                Television Channel
              </Link>
            </li>
            <li>
              <Link href="/solutions/virtualstudio">Virtual Studio</Link>
            </li>
            <li>
              <Link href="/solutions/conference-room">Conference Systems</Link>
            </li>

            <li>
              <Link href="/solutions/dsng-obvan"> OB Vans</Link>
            </li>
            <li>
              <Link href="/solutions/var-systems">Transmission</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul className="footer-links">
            <li>
              <Link href="/about-studiotech">About Us</Link>
            </li>
            <li>
              <Link href="/career">Careers</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul className="footer-links">
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/service">Service &amp; Support</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/training">Training</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <Link
              href="https://linkedin.com/company/avsolutions"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="social-icon" viewBox="0 0 24 24" w-tid="226">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  w-tid="227"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://twitter.com/avsolutions"
              aria-label="Follow us on Twitter"
            >
              <svg className="social-icon" viewBox="0 0 24 24" w-tid="229">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  w-tid="230"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://facebook.com/avsolutions"
              aria-label="Follow us on Facebook"
            >
              <svg className="social-icon" viewBox="0 0 24 24" w-tid="232">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  w-tid="233"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://instagram.com/avsolutions"
              aria-label="Follow us on Instagram"
            >
              <svg className="social-icon" viewBox="0 0 24 24" w-tid="235">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  w-tid="236"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://youtube.com/avsolutions"
              aria-label="Subscribe to our YouTube channel"
            >
              <svg className="social-icon" viewBox="0 0 24 24" w-tid="238">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  w-tid="239"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Studiotech Blegium. All rights reserved.</p>
        <div className="footer-legal">
          <Link href="/privacy">Privacy Policy</Link> |
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
