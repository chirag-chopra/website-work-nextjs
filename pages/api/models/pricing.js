const mongoose = require("mongoose");

const PricingSchema = new mongoose.Schema(
    {
        planKey: String,
        planName: String,
        price: Number,
        duration: Number,
        visible: { type: Boolean, default: true },
    },
    { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Pricing", PricingSchema);