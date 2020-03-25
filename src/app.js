import express from "express";
import cors from "cors";
import morgan from "morgan";

import "dotenv/config";

import routes from "./routes";

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(morgan("dev"));
  }
  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
