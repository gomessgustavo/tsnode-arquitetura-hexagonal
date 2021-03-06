import {
  Column,
  CreatedAt,
  HasMany,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from "sequelize-typescript";
import { Usuario } from "../../../application/core/domain/Usuario";
import Veiculo from "./VeiculoEntity";

@Table({
  tableName: "usuario",
})
class UsuarioEntity extends Model<Usuario> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: number;

  @Column
  nome: string;

  @Unique
  @Column
  apelido: string;

  @Column
  senha: string;

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

  @HasMany(() => Veiculo, "usuarioId")
  veiculos: Veiculo[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default UsuarioEntity;
