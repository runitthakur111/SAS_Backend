// services/emailService.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendEmail = async (to, subject, html) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    html,
  });
};
