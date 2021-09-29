const nodemailer = require('nodemailer');

const wrapAsync = require('../middleware/asyncError');
const sendEmail = wrapAsync(async (option) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_USERNAME,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    from: process.env.SMPT_USERNAME,
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

  await transporter.sendMail(mailOptions);
});

module.exports = sendEmail;
