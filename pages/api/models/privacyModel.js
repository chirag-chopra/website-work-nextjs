const mongoose = require("mongoose");

const PrivacySchema = new mongoose.Schema(
  {
    slug: String,
    websiteName: String,
    websiteUrl: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Privacy", PrivacySchema);
