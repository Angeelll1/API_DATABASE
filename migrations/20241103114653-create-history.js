'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('History', {
      docno: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      subdist_id: {
        type: Sequelize.STRING
      },
      chiller_id: {
        type: Sequelize.STRING
      },
      path_image: {
        type: Sequelize.STRING
      },
      send_Date: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('History');
  }
};