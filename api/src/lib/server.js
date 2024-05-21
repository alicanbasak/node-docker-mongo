import express from "express";
import config from "./config.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;

  httpServer.get("/ping", (req, res) => {
    console.log(`ℹ️ - Ping route: ${req.url} ${Date.now()}`);
    res.status(200).json({
      message: "✅ - Pong: test successful",
    });
  });

  try {
    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    throw new Error(err);
  }
};
