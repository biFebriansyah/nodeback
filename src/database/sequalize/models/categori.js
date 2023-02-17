const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../../configs/db')

class Categori extends Model {
    // uncomment for add assotiation / relation
    // static associations(model){}
}

// define database coulmn
Categori.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name_categori: {
            type: DataTypes.STRING,
            allowNull: false
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
    { sequelize: sequelize, timestamps: true, modelName: 'categoris' }
)

module.exports = Categori
