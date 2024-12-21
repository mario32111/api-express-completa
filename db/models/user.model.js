const {   Model, DataTypes, Sequelize } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey:  true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,  // Corregido a minúsculas
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  //NO SE DEBEN USAR CAMEL CASE
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate(){
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User };