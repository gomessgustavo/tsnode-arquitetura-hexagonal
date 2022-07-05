import Sequelize, {
  Column,
  CreatedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";

@Table
class Produto extends Model {
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

export default Produto;
