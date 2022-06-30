"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./ormconfig"));
const connections = ormconfig_1.default;
typeorm_1.createConnection(Object.assign(Object.assign({}, connections), { name: "default" }));
