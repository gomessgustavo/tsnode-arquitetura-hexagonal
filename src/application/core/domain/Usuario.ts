import Veiculo from "../../../adapters/inbound/entity/VeiculoEntity";

export class Usuario {
  nome: string;
  idade: number;
  cep: string;
  apelido: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  senha: string;
  veiculos: Veiculo[];
}
