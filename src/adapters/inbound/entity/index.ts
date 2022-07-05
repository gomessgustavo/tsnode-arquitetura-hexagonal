import { ModelCtor } from "sequelize-typescript";
import Produto from "./ProdutoEntity";
import Usuario from "./UsuarioEntity";
import Veiculo from "./VeiculoEntity";

export default [Produto, Usuario, Veiculo] as ModelCtor[];
