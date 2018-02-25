/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
("use strict");

const Response = require("./services/response");
const { sendEmail } = require("./services/email");

module.exports.sendContact = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const res = Response(callback);
  try {
    const { name, email, message } = JSON.parse(event.body);
    if (!name || !email || !message)
      res.error("Must send name, email, and message");
    else {
      const html = `
        <html>
        <body>
            <p><b>Name: </b><span>${name}</span></p>
            <p><b>Email: </b><span>${email}</span></p>
            <br />
            <p><b>Message: </b><span>${message}</span></p>
           
        </body>
        </html>
      `;
      const text = `name: ${name} \n email: ${email} \n message: ${message} \n`;
      await sendEmail("Contact request", html, text, {
        from: "Contact Us",
        to: process.env.receivingEmail
      });
      res.send({ success: true });
    }
  } catch (e) {
    res.error("Failed to send message");
  }
};
