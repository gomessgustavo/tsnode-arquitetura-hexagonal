"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoEntity_1 = __importDefault(require("../adapters/inbound/entity/ProdutoEntity"));
const UsuarioEntity_1 = __importDefault(require("../adapters/inbound/entity/UsuarioEntity"));
const VeiculoEntity_1 = __importDefault(require("../adapters/inbound/entity/VeiculoEntity"));
exports.default = {
    type: "sqlite",
    database: "./src/database/database.sqlite",
    synchronize: true,
    entities: [UsuarioEntity_1.default, ProdutoEntity_1.default, VeiculoEntity_1.default],
    migrations: [],
    subscribers: [],
    cli: {
        entitiesDir: "",
        migrationsDir: "",
        subscribersDir: "",
    },
};
