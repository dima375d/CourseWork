/** @format */

import express from "express";
import dotenv from "dotenv";
import logger from "./logger";
import DataBase from "./database/database";
import routes from "./routes/routers";

dotenv.config();

const app = express();

const PORT = +process.env.PORT;

app.use(express.json());

app.use("/api", routes);

logger.error("error");
logger.info("info");

const start = async () => {
  try {
    await DataBase.sync();
    await DataBase.authenticate();
    app.listen(PORT, () => logger.info("Server work " + PORT));
  } catch (e) {
    logger.info(e);
  }
};

start();
