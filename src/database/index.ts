import { Sequelize } from "sequelize-typescript";
import config from "./SequelizeConfig";

class Database {
  public connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(config);
  }
}

const database: Database = new Database();

export default database;
