import { ICreateAccount, ILogin } from "@src/models"
import { getInstance } from "./axios"

const BASE_URL = "/account"

const AccountAPI = {
  createAccount: async(account: ICreateAccount) => {
    const instance = getInstance();
    const { data } = await instance.post(BASE_URL, account)
    
    return data
  },
  login: async(login: ILogin) => {
    const instance = getInstance();
    const { data } = await instance.post(`${BASE_URL}/login`, login)
    
    return data
  }
}

export default AccountAPI