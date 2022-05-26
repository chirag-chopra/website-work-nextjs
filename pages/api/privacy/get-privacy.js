import connectDB from "../utils/db";
import Privacy from "../models/privacyModel";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { slugText } = req.body;
    const privacyData = await Privacy.findOne({ slug: slugText });
    if (privacyData != null) {
      res
        .status(200)
        .json({
          success: true,
          message: "Privacy added successfully",
          data: privacyData,
        });
    } else {
      res.status(200).json({ success: false, message: "invalid url" });
    }
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
