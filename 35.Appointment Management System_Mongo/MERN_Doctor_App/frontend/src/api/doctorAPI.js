
import axiosInstance from "./axiosInstance";

export const applyDoctor =(data)=>{
    return axiosInstance.post("/doc/apply",data)
}

export const updateStatusDoctor = (docID,data)=>{
    return axiosInstance.patch(`/doc/docStatus/${docID}`,data)
}

export const appliedDoctorList=()=>{
    return axiosInstance.get('doc/docApplyList')
}

export const getApprovedDoctorList=()=>{
    return axiosInstance.get('/doc/getApprovedDoctorList')
}