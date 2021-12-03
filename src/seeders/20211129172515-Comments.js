'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Comments',
    [
      {
        id: 1,
        comment: 'Não vou mais te chamar paracomerrumacocacomigo',
        userId: 2,
        postId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        comment: 'Aí você tem um ponto',
        userId: 1,
        postId: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        comment: 'Você quiz dizer um PONTEIRO?',
        userId: 2,
        postId: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 4,
        comment: 'Não vou mais te chamar paracomerrumacocacomigo',
        userId: 1,
        postId: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Comments', null, {}),
};
