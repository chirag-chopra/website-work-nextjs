import bcryptjs from "bcryptjs";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
  {
    fullName: String,
    email: String,
    password: String,
    confirmPassword: String,
  },
  { collection: "users", timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Auth", AuthSchema);
