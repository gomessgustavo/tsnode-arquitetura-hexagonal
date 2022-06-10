import { Sequelize } from "sequelize";

class Database {
  public connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize({
      dialect: "sqlite",
      storage: "./database.sqlite",
    });
  }
}

const database: Database = new Database();

export default database;
