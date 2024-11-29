"use server";

import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Environment variables
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;
const DEFAULT_SENDER = process.env.DEFAULT_SENDER || "no-reply@gmail.com";
const DEFAULT_SUBJECT = "New Contact Submission";

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: 2525,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

// Variable to cache the email template
let emailTemplate;

// Function to load and cache the email template
const loadEmailTemplate = () => {
  const templatePath = path.resolve("./public/templates/email-template.html");
  try {
    const template = fs.readFileSync(templatePath, "utf-8");
    console.log("Template loaded:", template); // Verify the content
    return template;
  } catch (error) {
    console.error("Failed to read email template:", error);
    throw new Error("Email template not found.");
  }
};

// Function to generate the email content by replacing placeholders
function generateEmailContent(data) {
  if (
    !data ||
    !data.name ||
    !data.email ||
    !data.phone ||
    !data.message ||
    !data.company ||
    !data.interest
  ) {
    throw new Error("Missing required data for email template.");
  }

  // Get the loaded template
  const template = loadEmailTemplate(); // Ensure this works as expected

  // Replace placeholders with actual data values
  return template
    .replace("{{name}}", data.name || "")
    .replace("{{email}}", data.email || "")
    .replace("{{phone}}", data.phone || "")
    .replace("{{message}}", data.message || "")
    .replace("{{company}}", data.company || "")
    .replace("{{interest}}", data.interest || "");
}

// Main function to send an email
export async function sendMail({ data, email, sendTo, subject, text }) {
  const templateData = {
    name: data.name || "John Doe",
    email: data.email || "8Ql9o@example.com",
    phone: data.phone || "1234567890",
    message: data.message || "Default message",
    company: data.company || "Default interest",
    interest: data.interest || "Default interest",
  };
  console.log("Received templateData:", templateData.company); // Log the templateData here

  // Ensure that templateData is passed and Missing required template data:contains the required fields
  if (
    !templateData ||
    !templateData.name ||
    !templateData.email ||
    !templateData.phone ||
    !templateData.message ||
    !templateData.company ||
    !templateData.interest
  ) {
    console.error("Missing required template data:", templateData);
    throw new Error("Missing required template data");
  }

  try {
    // Verify the SMTP connection
    await transporter.verify();
    console.log("SMTP server is verified and ready.");

    // Generate the email content using the template and data
    const htmlContent = generateEmailContent(templateData); // Use the template and data to generate HTML content

    console.log("Generated HTML Content:", htmlContent); // Log the generated content for debugging

    // Send the email using Nodemailer
    const info = await transporter.sendMail({
      from: email || DEFAULT_SENDER,
      to: sendTo || SITE_MAIL_RECEIVER,
      subject: subject || DEFAULT_SUBJECT,
      text: text || "No text content provided.",
      html: htmlContent, // Use the generated HTML content
    });

    console.log("Message Sent:", info.messageId);
    console.log("Mail sent to:", sendTo || SITE_MAIL_RECEIVER);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}
