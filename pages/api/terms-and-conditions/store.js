import connectDB from "../utils/db";
import TermsAndConditions from "../models/termsAndConditionsModel";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { slug, websiteName, websiteUrl } = req.body;
    await TermsAndConditions.create({ slug, websiteName, websiteUrl });
    res
      .status(200)
      .json({
        success: true,
        message: "Terms And Conditions added successfully",
      });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
