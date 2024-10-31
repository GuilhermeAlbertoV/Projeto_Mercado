import Express from "express";

const app = Express();

class Server {
  constructor() {
    this.ExecServer();
  }

  ExecServer() {
    app.listen(2000, () => {
      console.log("Servidor rodando na url: http://localhost:2000");
    });

    app.get("/inicio", (req, res) => {
      res.send("<h1>Hello, World </h1>");
    });
  }
}
new Server();
