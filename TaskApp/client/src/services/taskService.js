import api from "./api";

export const getAllTasks = () =>{
return api.get("/tasks");}

export const createTask = (data) =>{
 return api.post("/tasks", data);}

export const deleteTask=(id)=>{
   return api.delete(`/tasks/${id}`);}

export const getMyTasks =()=>{
    return api.get("/tasks/my");
}

export const updateTaskStatus=(id,data)=>{
    return api.patch(`/tasks/${id}`,data);
}


