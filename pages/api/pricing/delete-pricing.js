import connectDB from "../utils/db";
import Pricing from "../models/pricing";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { planKey, visible } = req.body;
    await Pricing.findOneAndUpdate({ planKey }, { visible }, { upsert: true });
    res
      .status(200)
      .json({ success: true, message: "Plan deleted successfully" });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
