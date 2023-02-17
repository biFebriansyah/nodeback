const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../../configs/db')
const categori = require('./categori')

class Products extends Model {
    // uncomment for add assotiation / relation
    // static associations(model){}
}

// define database coulmn
Products.init(
    {
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
    },
    { sequelize: sequelize, timestamps: true, modelName: 'products' }
)

Products.belongsTo(categori, {
    foreignKey: 'id_categori',
    as: 'categoris'
})

module.exports = Products
