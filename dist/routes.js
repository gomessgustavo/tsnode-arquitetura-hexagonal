"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProdutoController = require('./adapters/inbound/ProdutoController'); var _ProdutoController2 = _interopRequireDefault(_ProdutoController);

const routes = _express.Router.call(void 0, );

routes.post("/produto", _ProdutoController2.default.store);

exports. default = routes;
