import { Cep } from "../../core/domain/Cep";

interface BuscarCepPort {
  buscar(cep: string): Promise<Cep>;
}

export default BuscarCepPort;
