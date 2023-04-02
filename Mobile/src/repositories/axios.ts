
import { BACKEND_URL } from "@config/server";
import axios from "axios";


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

export const getInstance = () => instance
