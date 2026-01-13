const {DataTypes} =require("sequelize")
const sequelize =require('../config/db')
const { title } = require("process")

const Task =sequelize.define("Task",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    title:DataTypes.STRING,
    description:DataTypes.TEXT,
    status:{
        type:DataTypes.ENUM("Pending","In Progress","Completed"),
        defaultValue:"Pending",
    }
})

module.exports =Task;