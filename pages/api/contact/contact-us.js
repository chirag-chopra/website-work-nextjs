import connectDB from "../utils/db";
import Contact from "../models/contactModel";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, email, msg } = req.body;

    await Contact.create({ name, email, msg });
    res.status(200).json({ success: true, message: "Contacted successfully" });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
