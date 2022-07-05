import { SequelizeOptions } from "sequelize-typescript";
import Entities from "../adapters/inbound/entity";

const config: SequelizeOptions = {
  repositoryMode: true,
  dialect: "sqlite",
  storage: "./database.sqlite",
  models: Entities,
};

export default config;
