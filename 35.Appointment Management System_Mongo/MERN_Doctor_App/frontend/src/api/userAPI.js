import axiosInstance from "./axiosInstance";


export const registerUser=(data)=>{
    return axiosInstance.post("/user/register",data,{headers:{
        "Content-Type":"multipart/form-data"
    }})
}

export const loginUser = (data)=>{
    return axiosInstance.post("/user/login",data)
}

export const getLoggedUser=()=>{
    return axiosInstance.get("/user/getUserInfo")
}

export const getDoctorList = ()=>{
    return axiosInstance.get("/user/doctorList")
}

export const getAllUsers = () => {
  return axiosInstance.get("/user/usersList");
};