import connectDB from "../utils/db";
import Privacy from "../models/privacyModel";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { slug, websiteName, websiteUrl } = req.body;
    await Privacy.create({ slug, websiteName, websiteUrl });
    res
      .status(200)
      .json({ success: true, message: "Privacy added successfully" });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
