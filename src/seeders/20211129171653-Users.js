'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        id: 1,
        name: 'Tales',
        email: 'tales@email.com',
        password: '$2b$10$L0qiimxkhD/f8sJtUx3m1.ImUZNNL9fEOFry15772ihcXWFAQvCOW',
        image: 'https://as2.ftcdn.net/v2/jpg/00/61/41/41/1000_F_61414189_QTHltwwioNQ2HoGFiSQBo8OAonCgceYs.jpg',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Rodrigo',
        email: 'rodrigo@email.com',
        password: '$2b$10$L0qiimxkhD/f8sJtUx3m1.ImUZNNL9fEOFry15772ihcXWFAQvCOW',
        image: 'https://as1.ftcdn.net/v2/jpg/02/62/89/56/1000_F_262895694_ZTEujfCykcG2vJoA0UVgZIPK1dTMlc9B.jpg',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
