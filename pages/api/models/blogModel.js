const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    head: { titleTxt: String, titleImg: String },
    body: mongoose.Schema.Types.Mixed,
    visibile: Boolean,
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Blog", BlogSchema);
