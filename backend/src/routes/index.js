const express = require("express");
const router = express.Router();
const eventoController = require("../controllers/eventoController");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");
const { sendNotification } = require("../services/fcmService");

// auth
router.post("/auth/register", authController.register); // idealmente só admin cria admin
router.post("/auth/login", authController.login);

// eventos (listar e detalhes abertos)
router.get("/eventos", eventoController.listar);
router.get("/eventos/:id", eventoController.buscar);

// rotas protegidas (cadastro/edição/apagamento) -> admin
router.post("/eventos", auth, async (req, res, next) => {
  if (req.userRole !== "admin") return res.status(403).json({ error: "Acesso negado" });
  return eventoController.criar(req, res, next);
});
router.put("/eventos/:id", auth, async (req, res, next) => {
  if (req.userRole !== "admin") return res.status(403).json({ error: "Acesso negado" });
  return eventoController.atualizar(req, res, next);
});
router.delete("/eventos/:id", auth, async (req, res, next) => {
  if (req.userRole !== "admin") return res.status(403).json({ error: "Acesso negado" });
  return eventoController.remover(req, res, next);
});

// rota para enviar notificação de teste (body: { token, title, body })
router.post("/notificacoes", auth, async (req, res) => {
  if (req.userRole !== "admin") return res.status(403).json({ error: "Acesso negado" });
  const { token, title, body, data } = req.body;
  try {
    const resp = await sendNotification(token, title, body, data || {});
    return res.json({ success: true, resp });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
