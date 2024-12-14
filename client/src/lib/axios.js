import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://chat-application-backend-1-okuv.onrender.com/api",
    withCredentials:true, //send cookies in every single request
})