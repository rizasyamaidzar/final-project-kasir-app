"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pesanans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        // foreign key untuk tabel Products
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Products", // nama tabel yang dirujuk
          key: "id", // kolom di tabel Products
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      checkoutId: {
        // foreign key untuk tabel Products
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Checkouts", // nama tabel yang dirujuk
          key: "id", // kolom di tabel Products
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pesanans");
  },
};
