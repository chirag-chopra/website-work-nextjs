const mongoose = require("mongoose");

const PrivacySchema = new mongoose.Schema(
  {
    slug: String,
    headingOne: String,
    headingTwo: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Privacy", PrivacySchema);
