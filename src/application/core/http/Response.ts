import { Erro } from "../domain/Erro";

class Response {
  data: Object;
  status: number;
}

export const getResponse = (
  objeto: Object,
  statusSucesso?: number
): Response => {
  const response = new Response();
  if (objeto instanceof Erro) {
    response.data = {
      erro: {
        mensagem: objeto.mensagem,
      },
    };
    response.status = objeto.status;
  } else {
    response.data = objeto;
    response.status = statusSucesso || 200;
  }

  return response;
};
