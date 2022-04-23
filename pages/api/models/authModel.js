import bcryptjs from "bcryptjs";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
  {
    fullName: String,
    email: String,
    password: String
  },
  { collection: "users", timestamps: true }
);

mongoose.models = {};
const Auth = mongoose.model("Auth", AuthSchema);
export default Auth
