import connectDB from "../utils/db";
import Pricing from "../models/pricing";

const handler = async (req, res) => {
  if (req.method == "GET") {
    await Pricing.find({ visible: true }, function (err, result) {
      if (err) throw err;
    });
    res.status(200).json({ result });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
