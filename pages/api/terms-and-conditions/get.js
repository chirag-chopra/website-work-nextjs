import connectDB from "../utils/db";
import TermsAndConditions from "../models/termsAndConditionsModel";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { slug } = req.body;
    const termsAndConditionsData = await TermsAndConditions.findOne({
      slug: slug,
    });
    console.log("BACK : ", slug);
    if (termsAndConditionsData != null) {
      res.status(200).json({
        success: true,
        message: "Terms and conditions added successfully",
        data: termsAndConditionsData,
      });
    } else {
      res.status(200).json({ success: false, message: "invalid url" });
    }
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
