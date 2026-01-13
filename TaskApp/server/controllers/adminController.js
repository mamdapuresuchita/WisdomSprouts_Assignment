const {User,Task}= require('../models')

const getUsers = async (req,res)=>{
    const users = await User.findAll({where:{role:"user"}})
res.json(users);
}

const getAllTasks = async(req,res)=>{
    const tasks = await Task.findAll({include:User})
    res.json(tasks);
}

const createTask = async (req,res)=>{
    const {title,description,userId} =req.body;
    const task = await Task.create({title,description,UserId:userId})
    res.json(task)
}

const deleteTask = async (req,res)=>{
    await Task.destroy({where:{id:req.params.id}})
    res.json({message:"Task deleted"})
}

module.exports={getUsers,createTask,deleteTask,getAllTasks}