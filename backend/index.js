const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// IMPORTAR ROTA DE EVENTOS
const eventosRoutes = require("./src/routes/eventos");
app.use("/eventos", eventosRoutes);

// INICIAR SERVIDOR
app.listen(3000, () => {
  console.log("Backend rodando na porta 3000");
});
