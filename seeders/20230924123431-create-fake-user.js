"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Mikhail Yuwan Kho",
          email: "mikhailyuwankho@gmail.com",
          uuid: "d2b1ecba-c53e-4944-b9ba-c2b1a708b2ce",
          role: "admin",
          createdAt: "2023-09-24T10:05:13.000Z",
          updatedAt: "2023-09-24T10:05:13.000Z",
        },
        {
          name: "Jane Doe",
          email: "Jane@gmail.com",
          uuid: "d2b1ecba-c53e-4944-b9ba-c2b1a456b2ce",
          role: "admin",
          createdAt: "2023-09-24T10:05:13.000Z",
          updatedAt: "2023-09-24T10:05:13.000Z",
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {})
  },
}
