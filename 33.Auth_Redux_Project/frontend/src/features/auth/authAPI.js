import axiosInstance from "../../services/axiosInstance";

export const registerUserAPI = async (data) => {
  const response = await axiosInstance.post("auth/register", data);
  return response.data;
};

export const loginUserAPI = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};
