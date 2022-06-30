"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./application/shared");
require("./database/index");
const app_1 = __importDefault(require("./app"));
const PORTA = 3000;
try {
    app_1.default.listen(PORTA, () => {
        console.log("servidor ativo");
    });
}
catch (erro) {
    console.log(erro);
}
