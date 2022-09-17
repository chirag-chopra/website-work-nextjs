import connectDB from "../utils/db";
import Blog from "../models/blogModel";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { titleTxt, titleImg, bodyObjects } = req.body;

    await Blog.create({ head: { titleTxt, titleImg }, body: bodyObjects });
    res
      .status(200)
      .json({ success: true, message: "Plan added or updated successfully" });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
