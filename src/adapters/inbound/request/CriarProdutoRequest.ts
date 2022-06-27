import { JsonProperty } from "json-object-mapper";

export class CriarProdutoRequest {
  @JsonProperty()
  nome: string;

  @JsonProperty()
  descricao?: string;

  @JsonProperty()
  preco: string;
}
