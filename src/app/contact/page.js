"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbard";

import { z } from "zod";
import { toast } from "sonner";
import { sendMail } from "../../../lib/send-mail";
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Please Enter Your Name" }),
  email: z.string().email({ message: "Please Enter a Valid Email Address" }),
  company: z.string().min(2, { message: "Please Enter Your Company Name" }),
  phone: z.string().regex(/^[0-9]{10,15}$/, {
    message: "Please enter a valid phone number with 10-15 digits.",
  }),
  message: z.string().min(10, {
    message: "Please make sure your message is at least 10 characters long.",
  }),
});

const contact = ({
  formAction = "https://example.com/submit-contact",
  contactEmail = "info@studiotech.be",
  address = "Houtweg 7 1130 Brussels",
  phone = "T +32 2 266 13 80",
  linkedinUrl = "https://linkedin.com/company/studiotech",
  twitterUrl = "https://twitter.com/studiotech",
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    const mailText = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    try {
      const response = await sendMail({
        data: formData,
        email: formData.email,
        subject: "New Contact Us Form",
        text: mailText,
      });

      if (response?.messageId) {
        toast.success("Application Submitted Successfully.");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          company: "",
          interest: "",
        }); // Reset form
      } else {
        toast.error("Failed to send application.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    try {
      // Validate form data against the schema
      contactFormSchema.parse(formData);
      setErrors({
        name: "",
        email: "",
        message: "",
        phone: "",
        company: "",
        interest: "",
      }); // Clear errors
      return true;
    } catch (err) {
      const validationErrors = {};
      err.errors.forEach((error) => {
        validationErrors[error.path[0]] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-info">
          <h1>Let's Connect</h1>
          <p>
            Have a project in mind or want to discuss how we can transform your
            broadcast capabilities? We're here to listen and help.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
              <span>{contactEmail}</span>
            </div>
            <div className="contact-detail">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>{address}</span>
            </div>
            <div className="contact-detail">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 1.42 3.28 2.61 5.25 3.43l1.74-1.74c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-1.75 1.74z" />
              </svg>
              <span>{phone}</span>
            </div>
          </div>

          <div className="social-links">
            <a href={linkedinUrl} aria-label="Follow us on LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href={twitterUrl} aria-label="Follow us on Twitter">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && (
                <p className="text-red-500">{errors.company}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="+1 (123) 456-7890"
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="interest">Area of Interest *</label>
              <select
                id="interest"
                name="interest"
                required
                className="text-[#000] font-bold"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="" className="text-[#000] font-normal">
                  Please select...
                </option>
                <option value="broadcast" className="text-[#000] font-normal">
                  Broadcast Solutions
                </option>
                <option value="virtual" className="text-[#000] font-normal">
                  Virtual Studio
                </option>
                <option value="conference" className="text-[#000] font-normal">
                  Conference Systems
                </option>
                <option value="ob" className="text-[#000] font-normal">
                  OB Vans
                </option>
                <option value="var" className="text-[#000] font-normal">
                  VAR Systems
                </option>
                <option value="others" className="text-[#000] font-normal">
                  Others
                </option>
              </select>
              {errors.interest && (
                <p className="text-red-500">{errors.interest}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>

            <button type="submit" className="submit-btn">
              {isLoading ? "Sending....." : "Send"}
            </button>
          </form>
        </div>
        <style jsx>{`
          :root {
            --bg: #000;
            --text: #fff;
            --accent1: #fecc00;
            --accent2: #ff9900;
          }

          body {
            margin: 0;
            font-family: "Inter", sans-serif;
            background: linear-gradient(135deg, #000000, #1a1a1a);
            color: var(--text);
            line-height: 1.6;
          }

          .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            min-height: 100vh;
            background: radial-gradient(
              circle at top right,
              rgba(254, 204, 0, 0.05),
              transparent 60%
            );
          }

          .contact-info {
            background: linear-gradient(
              135deg,
              rgba(254, 204, 0, 0.15),
              rgba(255, 215, 0, 0.05)
            );
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .contact-info::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
              90deg,
              transparent,
              var(--accent1),
              transparent
            );
          }

          .contact-form {
            padding: 16rem 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.9),
              rgba(20, 20, 20, 0.9)
            );
          }

          .contact-info h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
            background: linear-gradient(45deg, var(--accent1), var(--accent2));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradient 8s ease infinite;
            background-size: 200% auto;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .contact-info p {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 2rem;
          }

          .contact-details {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .contact-detail {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: linear-gradient(
              90deg,
              rgba(254, 204, 0, 0.1),
              transparent
            );
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .contact-detail:hover {
            background: linear-gradient(
              90deg,
              rgba(254, 204, 0, 0.2),
              rgba(254, 204, 0, 0.05)
            );
            transform: translateX(10px);
          }

          .contact-detail svg {
            width: 30px;
            height: 30px;
            fill: var(--accent1);
          }

          .form-group {
            margin-bottom: 1.5rem;
            position: relative;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--accent1);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
          }

          .form-group input,
          .form-group textarea,
          .form-group select {
            width: 100%;
            padding: 1.2rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(254, 204, 0, 0.15);
            color: var(--text);
            transition: all 0.3s ease;
            border-radius: 25px; /* Changed from 0 to 25px for rounded corners */
            font-size: 1rem;
            box-sizing: border-box;
          }

          .form-group input:focus,
          .form-group textarea:focus,
          .form-group select:focus {
            outline: none;
            border-color: var(--accent1);
            background: rgba(255, 255, 255, 0.05);
          }

          .form-group input::placeholder,
          .form-group textarea::placeholder,
          .form-group select::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }

          .form-group select {
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fecc00'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1.5em;
            padding-right: 3rem;
          }

          .submit-btn {
            background: var(--accent1);
            color: var(--bg);
            border: none;
            padding: 1.2rem 2.5rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 25px; /* Changed from 0 to 25px for rounded corners */
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9rem;
            margin-top: 1rem;
            width: 100%;
          }

          .submit-btn:hover {
            background: var(--accent2);
          }

          .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
          }

          .social-icon {
            width: 30px;
            height: 30px;
            fill: var(--accent1);
            transition: all 0.3s ease;
          }

          .social-icon:hover {
            fill: var(--accent2);
            transform: translateY(-2px);
          }

          @media (max-width: 1024px) {
            .contact-container {
              grid-template-columns: 1fr;
            }

            .contact-info,
            .contact-form {
              padding: 2rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default contact;
