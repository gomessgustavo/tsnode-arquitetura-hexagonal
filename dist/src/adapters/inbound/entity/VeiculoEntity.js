"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
const typeorm_1 = require("typeorm");
const UsuarioEntity_1 = __importDefault(require("./UsuarioEntity"));
let Veiculo = class Veiculo {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Veiculo.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Veiculo.prototype, "modelo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Veiculo.prototype, "ano", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Veiculo.prototype, "placa", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Veiculo.prototype, "quilometragem", void 0);
__decorate([
    typeorm_1.ManyToOne(() => UsuarioEntity_1.default, { eager: true }),
    typeorm_1.JoinColumn({ name: "usuario_id" }),
    __metadata("design:type", UsuarioEntity_1.default)
], Veiculo.prototype, "usuario", void 0);
Veiculo = __decorate([
    typeorm_1.Entity("Veiculo")
], Veiculo);
exports.Veiculo = Veiculo;
exports.default = Veiculo;
