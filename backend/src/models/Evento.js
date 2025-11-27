const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Evento = sequelize.define("Evento", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  categoria: { type: DataTypes.STRING },
  endereco: { type: DataTypes.STRING },
  latitude: { type: DataTypes.DOUBLE },
  longitude: { type: DataTypes.DOUBLE },
  data: { type: DataTypes.DATE },
  verificado: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = Evento;
