import { Erro } from "../domain/Erro";
import { Produto } from "../domain/Produto";

class ResponseProduto {
  data: Produto | Produto[] | string | number;
  status: number;
}

function isErro(produto: Erro | Produto | Produto[] | number): produto is Erro {
  return (<Erro>produto).mensagem !== undefined;
}

export const getResponse = (
  produto: Produto | Produto[] | Erro | number,
  statusSucesso?: number
): ResponseProduto => {
  const response = new ResponseProduto();
  if (isErro(produto)) {
    response.data = produto.mensagem;
    response.status = produto.status;
  } else {
    response.data = produto;
    response.status = statusSucesso || 200;
  }

  return response;
};
