import express from "express";
import cors from "cors";
import database from "./database";
import routes from "./routes";

const RESET_DB = true;

class App {
  public servidor: express.Application;

  public constructor() {
    this.servidor = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares(): void {
    this.servidor.use(cors());
    this.servidor.use(express.json());
  }

  private routes(): void {
    this.servidor.use(routes);
  }

  private async database(): Promise<void> {
    const { connection } = database;
    try {
      await connection.sync({ force: RESET_DB });
    } catch (erro) {
      console.log(erro);
    }
  }
}

export default new App().servidor;
