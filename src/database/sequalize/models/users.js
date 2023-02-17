const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../../configs/db')

class User extends Model {
    // uncomment for add assotiation / relation
    // static associations(model){}
}

// define database coulmn
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
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
    { sequelize: sequelize, timestamps: true, modelName: 'Users', tableName: 'users' }
)

module.exports = User
