import Veiculo from "../entity/VeiculoEntity";

export class UsuarioResponse {
  nome: string;
  idade: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  veiculos: Veiculo[];
}
