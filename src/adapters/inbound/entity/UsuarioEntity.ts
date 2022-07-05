import Sequelize, {
  Column,
  CreatedAt,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Veiculo from "./VeiculoEntity";

@Table
class Usuario extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: number;

  @Column
  nome: string;

  @Column
  idade: number;

  @Column
  cep: string;

  @Column
  logradouro: string;

  @Column
  complemento: string;

  @Column
  bairro: string;

  @Column
  localidade: string;

  @Column
  uf: string;

  @HasMany(() => Veiculo)
  veiculos: Veiculo[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Usuario;
