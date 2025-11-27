const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async register(req, res) {
    const { nome, email, senha, role } = req.body;
    try {
      const user = await Usuario.create({ nome, email, senha, role });
      return res.json({ id: user.id, nome: user.nome, email: user.email });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao criar usuário", details: err.message });
    }
  },

  async login(req, res) {
    const { email, senha } = req.body;
    const user = await Usuario.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

    const match = await bcrypt.compare(senha, user.senha);
    if (!match) return res.status(400).json({ error: "Senha incorreta" });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return res.json({ token, user: { id: user.id, nome: user.nome, email: user.email, role: user.role } });
  }
};
