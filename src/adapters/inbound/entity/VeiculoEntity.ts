import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Usuario from "./UsuarioEntity";

@Entity("Veiculo")
export class Veiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelo: string;

  @Column()
  ano: string;

  @Column()
  placa: string;

  @Column()
  quilometragem: string;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;
}

export default Veiculo;
