const Evento = require("../models/Evento");

module.exports = {
  async listar(req, res) {
    const { categoria, cidade, lat, lng, radius } = req.query;

    // filtro simples por categoria
    const where = {};
    if (categoria) where.categoria = categoria;

    const eventos = await Evento.findAll({ where, order: [["data", "ASC"]] });
    return res.json(eventos);
  },

  async buscar(req, res) {
    const evento = await Evento.findByPk(req.params.id);
    if (!evento) return res.status(404).json({ error: "Evento não encontrado" });
    return res.json(evento);
  },

  async criar(req, res) {
    // administrador manda evento (depois a regra: verificar antes de publicar)
    const body = req.body;
    const novo = await Evento.create(body);
    return res.status(201).json(novo);
  },

  async atualizar(req, res) {
    const id = req.params.id;
    const [updated] = await Evento.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ error: "Evento não encontrado" });
    const evento = await Evento.findByPk(id);
    return res.json(evento);
  },

  async remover(req, res) {
    const id = req.params.id;
    const deleted = await Evento.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: "Evento não encontrado" });
    return res.json({ message: "Evento removido" });
  }
};
