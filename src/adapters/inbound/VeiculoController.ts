import { Response } from "express";
import { container } from "tsyringe";
import { getResponse } from "../../application/core/http/Response";
import { SalvarVeiculoService } from "../../application/core/service/SalvarVeiculoService";
import VeiculoMapper from "./mapper/VeiculoMapper";
import { TypedRequest } from "./request/Request";
import { UsuarioRequest } from "./request/UsuarioRequest";

export class VeiculoController {
  async salvar(
    req: TypedRequest<UsuarioRequest>,
    res: Response
  ): Promise<void> {
    const salvarVeiculoService = container.resolve(SalvarVeiculoService);
    const { body, params } = req;

    const usuarioId = parseInt(params?.usuarioId) | 0;

    const veiculoMapeado = VeiculoMapper.toEntity(body);
    const usuarioCriado = await salvarVeiculoService.criar(
      usuarioId,
      veiculoMapeado
    );
    const formataResponse = getResponse(usuarioCriado, 201);
    res.status(formataResponse.status).send(formataResponse.data);
  }
}
