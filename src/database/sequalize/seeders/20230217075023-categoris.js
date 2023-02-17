'use strict'

const data = [
    {
        id: 1,
        name_categori: 'makanan'
    },
    {
        id: 2,
        name_categori: 'minuman'
    },
    {
        id: 3,
        name_categori: 'snack'
    }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('categoris', data, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('categoris', null, {})
    }
}
