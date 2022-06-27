import { Cep } from "../../application/core/domain/Cep";
import BuscarCepPort from "../../application/ports/out/BuscarCepPort";
import axios, { AxiosResponse } from "axios";

const URL_VIA_CEP = "http://www.viacep.com.br/ws";

const getUrl = (cep: string) => {
  return `${URL_VIA_CEP}/${cep}/json`;
};

interface ResponseViaCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export class BuscarCepAdapter implements BuscarCepPort {
  constructor() {
    this.buscar = this.buscar.bind(this);
  }
  buscar = async (cepStr: string): Promise<Cep> => {
    try {
      const url = getUrl(cepStr);
      const request: AxiosResponse<ResponseViaCep, any> = await axios.get(url);
      const { cep, ibge, gia, ddd, siafi, ...endereco } = request.data;
      return endereco;
    } catch (erro) {
      throw erro;
    }
  };
}
