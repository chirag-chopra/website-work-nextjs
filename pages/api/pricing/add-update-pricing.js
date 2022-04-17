import connectDB from "../utils/db";
import Pricing from "../models/pricing";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { planKey, planName, price, duration } = req.body;
    await Pricing.findOneAndUpdate(
      { planKey },
      { planName, price, duration },
      { upsert: true }
    );
    res
      .status(200)
      .json({ success: true, message: "Plan added or updated successfully" });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
