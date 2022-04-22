import connectDB from "../utils/db";
import Auth from "../models/authModel";
import bcryptjs from "bcryptjs";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { fullName, email, password } = req.body;

    // check if user exists
    const isEmailExist = await Auth.exists({ email });
    if (!isEmailExist) {
      const hashedPassword = await bcryptjs.hash(password, 10);
      await Auth.create({ fullName, email, password: hashedPassword });
      res.status(200).json({
        success: true,
        message: "User registered successfully!",
      });
    } else {
      res.status(200).json({
        success: false,
        message: "You are already registered!",
      });
    }
  } else {
    res.status(200).json({ success: false, message: "Method not allowed" });
  }
};

export default connectDB(handler);
