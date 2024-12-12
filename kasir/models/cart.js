"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "Product",
      });
    }
  }
  Cart.init(
    {
      jumlah: DataTypes.INTEGER,
      total_harga: DataTypes.INTEGER,
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
