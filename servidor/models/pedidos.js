'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define('Pedidos', {
    id_Persona: DataTypes.INTEGER,
    id_Producto: DataTypes.INTEGER
  }, {});
  Pedidos.associate = function(models) {
    // associations can be defined here
  };
  return Pedidos;
};