import Produto from "../adapters/inbound/entity/ProdutoEntity";
import Usuario from "../adapters/inbound/entity/UsuarioEntity";
import Veiculo from "../adapters/inbound/entity/VeiculoEntity";

export default {
  type: "sqlite",
  database: "./src/database/database.sqlite",
  synchronize: true,
  entities: [Usuario, Produto, Veiculo],
  migrations: [],
  subscribers: [],
  cli: {
    entitiesDir: "",
    migrationsDir: "",
    subscribersDir: "",
  },
};
