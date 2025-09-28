import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://softwaredevelopmentdg_db_user:HnB5ZQ7axfLnk1Zp@cluster0.6slgbli.mongodb.net/"
  )
  .then(() => {
    app.listen(3000, () =>
      console.log("Server running on http://localhost:3000")
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
