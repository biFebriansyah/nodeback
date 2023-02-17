'use strict'

const users = [
    {
        role: 'admin',
        name: 'admin 1',
        username: 'admin',
        email: 'admin@email.com',
        password: '$2b$10$Ys9sJY67UKnmMh98.NrQ9.5qWIL.4v6aDYifCHCF.CcNm8Wqjy2VO' // <-- abcd12345
    },
    {
        role: 'admin',
        name: 'admin 2',
        username: 'admin2',
        email: 'admin2@email.com',
        password: '$2b$10$Ys9sJY67UKnmMh98.NrQ9.5qWIL.4v6aDYifCHCF.CcNm8Wqjy2VO' // <-- abcd12345
    },
    {
        role: 'users',
        name: 'user 1',
        username: 'user1',
        email: 'user1@email.com',
        password: '$2b$10$Ys9sJY67UKnmMh98.NrQ9.5qWIL.4v6aDYifCHCF.CcNm8Wqjy2VO' // <-- abcd12345
    },
    {
        role: 'users',
        name: 'user 2',
        username: 'user2',
        email: 'user2@email.com',
        password: '$2b$10$Ys9sJY67UKnmMh98.NrQ9.5qWIL.4v6aDYifCHCF.CcNm8Wqjy2VO' // <-- abcd12345
    }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', users, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', users, {})
    }
}
