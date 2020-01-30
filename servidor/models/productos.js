'use strict';
module.exports = (sequelize, DataTypes) => {
  const Productos = sequelize.define('Productos', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    precio: DataTypes.STRING
  }, {});
  Productos.associate = function(models) {
    // associations can be defined here
  };
  return Productos;
};