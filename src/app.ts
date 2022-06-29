import express from "express";
import cors from "cors";

import routes from "./routes";

class App {
  public servidor: express.Application;

  public constructor() {
    this.servidor = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.servidor.use(cors());
    this.servidor.use(express.json());
  }

  private routes(): void {
    this.servidor.use(routes);
  }
}

export default new App().servidor;
