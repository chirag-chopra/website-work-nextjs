require("dotenv").config()
import mongoose from "mongoose";

export const connectDB = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    await mongoose.connect("mongodb+srv://Nikhil_007:jsN6otItsjhsZNBy@cluster0.jnpbg.mongodb.net/test");
    return handler(req, res);
};

export default connectDB;