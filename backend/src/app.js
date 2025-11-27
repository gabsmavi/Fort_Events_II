require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    // sincroniza modelos (em produção, use migrations)
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
  } catch (err) {
    console.error("Erro ao iniciar:", err);
    process.exit(1);
  }
}

start();
