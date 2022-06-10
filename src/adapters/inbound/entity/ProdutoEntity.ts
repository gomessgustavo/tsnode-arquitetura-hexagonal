import Sequelize, { Model } from "sequelize";
import database from "../../../database";

class Produto extends Model {
  public id!: number;

  public nome: string;

  public descricao?: string;

  public preco: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Produto.init(
  {
    nome: Sequelize.STRING,
    descricao: Sequelize.STRING,
    preco: Sequelize.BOOLEAN,
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
  }
);

export default Produto;
