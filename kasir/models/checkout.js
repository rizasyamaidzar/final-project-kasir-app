"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Checkout.init(
    {
      nama: DataTypes.STRING,
      total_harga: DataTypes.INTEGER,
      keterangan: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER,
      mejaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Checkout",
    }
  );
  return Checkout;
};
