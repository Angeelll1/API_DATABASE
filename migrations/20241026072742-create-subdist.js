'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('m_subdist', {
      subdist_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      subdist_name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      owner_id: {
        type: Sequelize.STRING
      },
      pic: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('m_subdist');
  }
};