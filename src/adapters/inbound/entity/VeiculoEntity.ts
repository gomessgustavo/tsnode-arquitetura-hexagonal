import {
  BelongsTo,
  Column,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Usuario from "./UsuarioEntity";

@Table
export class Veiculo extends Model {
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

export default Veiculo;
