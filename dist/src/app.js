"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.servidor = express_1.default();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.servidor.use(cors_1.default());
        this.servidor.use(express_1.default.json());
    }
    routes() {
        this.servidor.use(routes_1.default);
    }
}
exports.default = new App().servidor;
