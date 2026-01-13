const {Task} = require('../models')

const myTasks = async(req,res)=>{
    const tasks = await Task.findAll({
        where:{UserId:req.user.id},
    })
    res.json(tasks)
}

const updateTaskStatus = async(req,res)=>{
    const{status}= req.body;
    await Task.update({status},{where:{id:req.params.id}})
    res.json({message:"Status Updated"})
}

module.exports= {myTasks,updateTaskStatus}