export class Erro {
  private _mensagem: string;
  private _status: number;

  constructor(mensagem: string, status: number) {
    this._mensagem = mensagem;
    this._status = status;
  }

  public get mensagem() {
    return this._mensagem;
  }

  public get status() {
    return this._status;
  }
}
