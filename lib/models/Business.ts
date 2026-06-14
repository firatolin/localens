import { Schema, models, model } from "mongoose";

const BusinessSchema = new Schema(
  {
    externalId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    address: String,
    city: String,
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    rating: Number,
    priceLevel: Number,
    phone: String,
    website: String,
    hours: Schema.Types.Mixed,
    imageUrls: [String],
  },
  { timestamps: true }
);

BusinessSchema.index({ lat: 1, lng: 1 });

export default models.Business || model("Business", BusinessSchema);
