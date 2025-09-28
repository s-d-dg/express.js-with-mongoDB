import { Router } from "express";
import { fetchTrades } from "../service/binance.js";
import { Trade } from "../models/trade.js";

const router = Router();

router.get("/", async (req, res) => {
  const { symbol, limit } = req.query;
  console.log("symbol, limit", symbol, limit);
  const trades = await fetchTrades(symbol, limit || 500);

  const latestSavedTradeDatetime = await Trade.findOne({
    symbol: symbol.toUpperCase(),
  })
    .sort({ timestamp: -1 })
    .select("timestamp")
    .lean();

  const tradesToSave = trades.data
    .filter((trade) =>
      latestSavedTradeDatetime
        ? new Date(trade.time) > latestSavedTradeDatetime
        : true
    )
    .map((trade) => ({
      id: trade.id,
      symbol: symbol.toUpperCase(),
      price: parseFloat(trade.price),
      quantity: parseFloat(trade.qty),
      quoteQty: parseFloat(trade.quoteQty),
      timestamp: new Date(trade.time),
      isBuyerMaker: trade.isBuyerMaker,
      isBestMatch: trade.isBestMatch,
    }));

  if (tradesToSave.length > 0) {
    await Trade.insertMany(tradesToSave);
  }

  res.json({
    symbol,
    limit: limit || 500,
    trades: trades.data,
  });
});

export const tradeRoutes = router;
