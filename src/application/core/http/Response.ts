import { Erro } from "../domain/Erro";

class Response {
  data: Object;
  status: number;
}

function isErro(objeto: Object): objeto is Erro {
  return (<Erro>objeto).mensagem !== undefined;
}

export const getResponse = (
  objeto: Object,
  statusSucesso?: number
): Response => {
  const response = new Response();
  if (isErro(objeto)) {
    response.data = objeto.mensagem;
    response.status = objeto.status;
  } else {
    response.data = objeto;
    response.status = statusSucesso || 200;
  }

  return response;
};
