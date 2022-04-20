import connectDB from "../utils/db";
import Pricing from "../models/pricing";

const handler = async (req, res) => {
  if (req.method == "GET") {
    res.status(200).json("Ok working")
  };
}
export default connectDB(handler);
