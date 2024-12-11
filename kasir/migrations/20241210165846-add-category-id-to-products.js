"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Products", "categoryId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Categories", // Nama tabel relasi
        key: "id", // Kolom di tabel relasi
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Products", "categoryId");
  },
};
