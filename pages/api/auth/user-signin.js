import connectDB from "../utils/db";
import Auth from "../models/authModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (user) {
      const isPasswordMatched = await bcryptjs.compare(password, user.password);
      if (isPasswordMatched) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.status(200).json({
          success: true,
          message: "User details fetched successfully!",
          token,
        });
      } else {
        res.status(400).json({ success: false, message: "Wrong password" });
      }
    } else {
      res.status(400).json({ success: false, message: "User does't exist!" });
    }
  } else {
    res.status(400).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
