import connectDB from "../utils/db";
import Contact from "../models/contactModel";
const nodemailer = require("nodemailer");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, email, msg } = req.body;

    await Contact.create({ name, email, msg });

    // mailing service
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "chirag.chopra@oneindiatech.com", pass: "chirag@123" },
    });

    var mailOptions = {
      from: "chiragchopra425@gmail.com", // sender address
      to: email, // list of receivers
      subject: "contact", // Subject line
      text: msg,
      html: `
      <div style="padding:10px;border-style: ridge">
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
          <li>Email: ${email}</li>
          <li>Message: ${msg}</li>
      </ul>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      console.log("test : ", error);
      if (error) {
        res
          .status(200)
          .json({ status: false, respMesg: "something went wrong" });
      } else {
        res
          .status(200)
          .json({ status: true, respMesg: "Email Sent Successfully" });
      }
    });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
