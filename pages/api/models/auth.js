
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
    { userEmail: String, userPassword: String },
    { collection: "users", timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Auth", AuthSchema);