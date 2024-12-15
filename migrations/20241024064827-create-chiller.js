'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('m_chiller', {
      chiller_id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      subdist_id: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('m_chiller');
  }
};