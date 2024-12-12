"use strict";
const { faker } = require("@faker-js/faker");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [1, 2, 3]; // Kategori: 1 (Makanan), 2 (Minuman), 3 (Camilan)
    const products = [];

    for (let i = 0; i < 10; i++) {
      const categoryId = faker.helpers.arrayElement(categories);
      products.push({
        kode: `MI${faker.number.int({ min: 100, max: 999 })}`, // Random kode
        nama: faker.commerce.productName(),
        harga: faker.number.int({ min: 5000, max: 50000 }),
        is_ready: faker.datatype.boolean(),
        gambar: faker.image.url(640, 480, true),
        stok: faker.number.int({ min: 0, max: 100 }),
        categoryId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Products", null, {});
  },
};
