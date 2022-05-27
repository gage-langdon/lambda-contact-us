/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
("use strict");

const Response = require("./services/response");
const { sendEmail } = require("./services/email");

module.exports.sendContact = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const res = Response(callback);

  try {
    const { name, email, subject, message, phone, job } = JSON.parse(event.body);
    if (!name || !email || !subject || !message)
      res.error("Must send name, email, subject and message");
    else {
      const html = `
        <html>
        <body>
            <p><b>Name: </b><span>${name}</span></p>
            <p><b>Phone: </b><span>${phone}</span></p>
            <p><b>Email: </b><span>${email}</span></p>
            <p><b>Job: </b><span>${job}</span></p>
            <br />
            <p><b>Message: </b><span>${message}</span></p>
           
        </body>
        </html>
      `;
      const text = `name: ${name} \n email: ${email} \n phone: ${phone} \n subject: ${subject} \n message: ${message} \n`;
      await sendEmail(`Contact Us Revampr - ${subject}`, html, text, {
        from: `${name} <${process.env.receivingEmail}>`,
        to: process.env.receivingEmail
      });
      res.send({ success: true });
    }
  } catch (e) {
    res.error(e);
  }
};
