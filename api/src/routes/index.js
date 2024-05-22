import express from "express";
import config from "../lib/config.js";
import { defaultRoutes } from "./defaults.js";

export default () => {
  const router = express.Router();

  if (config.routes.default) {
    defaultRoutes(router);
  }

  return router;
};
