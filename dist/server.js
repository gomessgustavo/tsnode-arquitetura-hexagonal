"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('./database');


const app = _express2.default.call(void 0, );
const port = 3000;

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
// app.use(routes);

try {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
} catch (error) {
  console.log(`Erro: ${error}`);
}
