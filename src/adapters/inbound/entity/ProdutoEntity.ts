import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Produto")
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;
}

export default Produto;
