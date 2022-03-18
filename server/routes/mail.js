const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "f35ee543937a7c60d6be40179ba35769-602cc1bf-a6de11ba",
    domain: "sandboxb882faeb0f98451aae910d3e70ea6b46.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));


let sendMail = router.post("/receive", function (req, res, next) {
  let mail = req.body.mail;
  let name = req.body.name;
  let phone = req.body.phone;
  let message = req.body.message;

  const mailOptions = {
    from: mail,
    to: "willyheisen67@gmail.com",
    subject: "Client message",
    text:
      "Mail: " +
      mail +
      "\n" +
      "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Message: " +
      message,
  };


  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("ERROR", err);
      res.status(400).send(err);
    } else {
      res.status(200).send("OK");
      console.log("SUCCESS");
    }
  });
});

module.exports = router;

// TUtorial : https://www.youtube.com/watch?v=JpcLd5UrDOQ
