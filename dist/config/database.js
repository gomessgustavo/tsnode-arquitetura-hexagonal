"use strict";Object.defineProperty(exports, "__esModule", {value: true});const database = {
  dialect: "postgres",
  host: "jdbc:postgresql://localhost:5432/crud-loja",
  username: "postgres",
  password: 123456,
  database: "crud-loja",
  port: 5433,
  define: {
    timestamps: true,
  },
};

exports. default = database;
