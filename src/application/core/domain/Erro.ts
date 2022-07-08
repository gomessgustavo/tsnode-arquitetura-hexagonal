export class Erro {
  private mensagem: string;
  private status: number;

  constructor(mensagem: string, status: number) {
    this.mensagem = mensagem;
    this.status = status;
  }
}
