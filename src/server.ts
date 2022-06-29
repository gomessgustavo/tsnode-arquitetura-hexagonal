import "reflect-metadata";
import "./application/shared";
import "./database";
import app from "./app";
const PORTA = 3000;

try {
  app.listen(PORTA, () => {
    console.log("servidor ativo");
  });
} catch (erro) {
  console.log(erro);
}
