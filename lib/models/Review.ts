import { Schema, models, model, Types } from "mongoose";

const ReviewSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    businessId: {
      type: Types.ObjectId,
      ref: "Business",
      required: true,
      index: true,
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    content: { type: String, required: true, minlength: 10, maxlength: 1000 },
    sentiment: {
      type: String,
      enum: ["positive", "neutral", "negative", null],
      default: null,
    },
  },
  { timestamps: true }
);

export default models.Review || model("Review", ReviewSchema);
