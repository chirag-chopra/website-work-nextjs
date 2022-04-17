require("dotenv").config()
import mongoose from "mongoose";

export const connectDB = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    await mongoose.connect("mongodb://localhost:27017/");
    return handler(req, res);
};

export default connectDB;