import axiosInstance from "./axiosInstance";

export const createAppointment = (data) =>
  axiosInstance.post("/appointment/createAppointment", data);

export const getUserAppointments = () =>
  axiosInstance.get("/appointment/getAppointmentByUser");

export const getDoctorAppointments = () =>
  axiosInstance.get("/appointment/showAppointmentsOfDoctor");

export const deleteAppointment = (id) =>
  axiosInstance.delete(`/appointment/deleteAppointment/${id}`);

export const updateAppointmentByUser = (id, data) =>
  axiosInstance.put(`/appointment/updateAppointment/${id}`, data);

export const updateAppointmentStatus = (id, status) =>
  axiosInstance.patch(`/appointment/updateAppointmentStatus/${id}`, {
    status,
  });

export const getAllAppointments = () =>
  axiosInstance.get("/appointment/getAllAppointments");
