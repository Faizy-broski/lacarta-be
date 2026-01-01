import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    email: String,
    preferredLanguage: String,
    services: [String],
    travelDate: Date,
    message: String,

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },

    cancellationReason: {
      type: String,
      default: "",
    },

    cancelledAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);
