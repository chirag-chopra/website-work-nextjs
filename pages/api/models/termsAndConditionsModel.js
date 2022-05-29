const mongoose = require("mongoose");

const TermsAndConditionsSchema = new mongoose.Schema(
  {
    slug: String,
    websiteName: String,
    websiteUrl: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("TermsAndConditions", TermsAndConditionsSchema);
