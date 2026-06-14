import { Schema, models, model, Types } from "mongoose";

const SearchLogSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", default: null },
    query: { type: String, required: true },
    category: String,
    resultCount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default models.SearchLog || model("SearchLog", SearchLogSchema);
