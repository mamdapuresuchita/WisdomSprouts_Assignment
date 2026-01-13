const sequelize = require("../config/db");

const {DataTypes, STRING, DATE} =require("sequelize");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  phone: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM("admin", "user"),
    defaultValue: "user",
  }
});


module.exports=User;