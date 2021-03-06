'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Item.associate = function (models) {
    // associations can be defined here
    Item.belongsToMany(models.Table, { through: models.Transaction })
  };
  return Item;
};