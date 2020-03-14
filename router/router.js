let express = require("express");
const nodemailer = require("nodemailer");
const { email, pass } = require("./personal");
let Router = express.Router();

Router.get("/get", (req, res) => {
  res.send({
    message: "messager"
  });
});
Router.post("/sendemail", async (req, res) => {
  let data = req.body;
  res.send({
    message: "It home Get Request"
  });
  var transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass
    }
    // go to this link and press on
    // https://myaccount.google.com/lesssecureapps?pli=1
  });

  var mailOptions = {
    from: data.sendemil,
    to: [data.tomail, "kamaluldin1999@gmail.com"],
    subject: "Sending Email from tech thar",
    text: data.text
  };

  await transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = Router;
