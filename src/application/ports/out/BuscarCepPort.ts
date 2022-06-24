import { Cep } from "../../core/domain/Cep";
import { Erro } from "../../core/domain/Erro";
import { Usuario } from "../../core/domain/Usuario";

interface BuscarCepPort {
  buscar(cep: string): Promise<Cep | Erro>;
}

export default BuscarCepPort;
