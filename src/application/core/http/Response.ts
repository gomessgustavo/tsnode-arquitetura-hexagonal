import { Erro } from "../domain/Erro";
import { Produto } from "../domain/Produto";

class ResponseProduto {
  data: Produto | string;
  status: number;
}

function isErro(produto: Erro | Produto): produto is Erro {
  return (<Erro>produto).mensagem !== undefined;
}

export const getResponse = (produto: Produto | Erro): ResponseProduto => {
  const response = new ResponseProduto();
  console.log(produto instanceof Produto);
  if (isErro(produto)) {
    response.data = produto.mensagem;
    response.status = produto.status;
  } else {
    response.data = produto;
    response.status = 200;
  }

  return response;
};
