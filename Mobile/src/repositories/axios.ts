import axios from "axios";

const instance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const setHeader = (key: string, value: string) => {
  instance.defaults.headers[key] = value
}

export const getInstance = () => instance
