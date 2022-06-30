"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = void 0;
class Response {
}
function isErro(objeto) {
    return objeto.mensagem !== undefined;
}
exports.getResponse = (objeto, statusSucesso) => {
    const response = new Response();
    if (isErro(objeto)) {
        response.data = {
            erro: {
                mensagem: objeto.mensagem,
            },
        };
        response.status = objeto.status;
    }
    else {
        response.data = objeto;
        response.status = statusSucesso || 200;
    }
    return response;
};
