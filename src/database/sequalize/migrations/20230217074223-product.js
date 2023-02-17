'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('products', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name_product: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price_product: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image_product: {
                type: DataTypes.STRING,
                allowNull: true
            },
            id_categori: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'categoris',
                    key: 'id'
                }
            },
            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE
            },
            updatedAt: {
                field: 'updated_at',
                type: DataTypes.DATE
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('products')
    }
}
