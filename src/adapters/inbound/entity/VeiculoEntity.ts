import {
  BelongsTo,
  Column,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Veiculo } from "../../../application/core/domain/Veiculo";
import Usuario from "./UsuarioEntity";

@Table({
  tableName: "veiculo",
})
export class VeiculoEntity extends Model<Veiculo> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: number;

  @Column
  modelo: string;

  @Column
  ano: number;

  @Column
  placa: string;

  @Column
  quilometragem: string;

  @ForeignKey(() => Usuario)
  usuarioId: number;

  @BelongsTo(() => Usuario)
  usuario: Usuario;
}

export default VeiculoEntity;
