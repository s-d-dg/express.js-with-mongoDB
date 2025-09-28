import { Router } from "express";
import { startTradingBot, stopTradingBot } from "../service/tradingBot.js";

const router = Router();

router.post("/start", (req, res) => {
  startTradingBot();
  res.json({ message: "Trading bot started" });
});

router.post("/stop", (req, res) => {
  stopTradingBot();
  res.json({ message: "Trading bot stopped" });
});

export const botRoutes = router;
