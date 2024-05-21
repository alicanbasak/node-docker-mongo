import express from "express";

export const startServer = () => {
  const httpServer = express();
  const port = process.env.PORT;

  try {
    httpServer.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (err) {
    throw new Error("Server failed to start", err);
  }
};
