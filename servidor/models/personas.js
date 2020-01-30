'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personas = sequelize.define('Personas', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Personas.associate = function(models) {
    // associations can be defined here
  };
  return Personas;
};