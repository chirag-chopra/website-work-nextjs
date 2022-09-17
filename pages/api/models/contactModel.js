const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    msg: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Contact", ContactSchema);
