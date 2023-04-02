
import { BACKEND_URL } from "@config/server";
import axios, { AxiosError } from "axios";


const instance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 1000,
});

export const setHeader = (key: string, value: string) => {
  instance.defaults.headers[key] = value
}

export const setAutorizationHeader = (value: string) => {
  instance.defaults.headers.Authorization = `Bearer ${value}`
}

instance.interceptors.response.use(
  (response) => response, 
  async (error: AxiosError) => {
  return Promise.reject(handleAxiosError(error));
});



const handleAxiosError = (err: AxiosError) => {
  let error: Error = {
    name: "",
    message: ""
  }
  if(err.response &&
     err.response.data &&
     err.response.data.error
    ) {
      error = {
        message: err.response.data.error.toString(),
        name: err.response.data.error.toString()
      }
    }
  return error
}
export const getInstance = () => instance
