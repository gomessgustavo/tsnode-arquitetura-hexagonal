import {
  Column,
  CreatedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { Produto } from "../../../application/core/domain/Produto";
import database from "../../../database";

@Table({
  tableName: "produto",
})
class ProdutoEntity extends Model<Produto> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: number;

  @Column
  nome: string;

  @Column
  descricao: string;

  @Column
  preco: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
({
  tableName: "produto",
});
export default ProdutoEntity;
