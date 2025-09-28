import { Router } from "express";
import { fetchTrades } from "../service/binance.js";

const router = Router();

router.get("/", async (req, res) => {
  const { symbol, limit } = req.query;
  console.log("symbol, limit", symbol, limit);
  const trades = await fetchTrades(symbol, limit || 500);
  //   const trades = await Trade.find({ symbol: req.params.symbol.toUpperCase() });

  res.json({
    symbol,
    limit: limit || 500,
    trades: trades.data,
  });
});

export const tradeRoutes = router;
