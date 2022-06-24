import Sequelize, { Model } from "sequelize";
import database from "../../../database";

class Usuario extends Model {
  public id!: number;

  public nome: string;

  public idade: number;

  public cep: string;

  public logradouro: string;

  public complemento: string;

  public bairro: string;

  public localidade: string;

  public uf: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Usuario.init(
  {
    nome: Sequelize.STRING,
    idade: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    cep: Sequelize.STRING,
    complemento: Sequelize.STRING,
    bairro: Sequelize.STRING,
    localidade: Sequelize.STRING,
    uf: Sequelize.STRING,
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
  }
);

export default Usuario;
