import axios from "axios";

const BINANCE_BASE_URL = "https://api.binance.com/";

export const fetchTrades = async (symbol, limit = 500) => {
  try {
    const response = await axios.get(`${BINANCE_BASE_URL}api/v3/trades`, {
      params: {
        symbol: symbol.toUpperCase(),
        limit,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching trades:", error);
    throw error;
  }
};
