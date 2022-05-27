const nodemailer = require("nodemailer");

const sendEmail = function (
  subject,
  html,
  text,
  { from = "contact us", to, cc }
) {
  console.log("EMAIL USERNAME : ", process.env.username)
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      auth: {
        user: process.env.username,
        pass: process.env.password
      }
    });

    const mailOptions = {
      from,
      to,
      cc,
      subject,
      text,
      html
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
module.exports.sendEmail = sendEmail;
