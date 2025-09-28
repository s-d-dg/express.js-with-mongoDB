import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  quoteQty: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  isBuyerMaker: { type: Boolean, required: true },
  isBestMatch: { type: Boolean, required: true },
});

export const Trade = mongoose.model("Trade", tradeSchema);
