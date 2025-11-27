const express = require("express");
const router = express.Router();
const db = require("../firebase"); // importa Firestore

// GET /eventos → lista todos os eventos
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("eventos").get();

    const lista = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(lista);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// GET /eventos/:id → retorna 1 evento
router.get("/:id", async (req, res) => {
  try {
    const ref = db.collection("eventos").doc(req.params.id);
    const doc = await ref.get();

    if (!doc.exists) {
      return res.status(404).json({ erro: "Evento não encontrado" });
    }

    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

module.exports = router;
