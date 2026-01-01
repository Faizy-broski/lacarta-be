import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: [
        "beaches",
        "activities",
        "tours",
        "gastronomy",
        "hotels",
        "boating"
      ],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Activity", activitySchema);
