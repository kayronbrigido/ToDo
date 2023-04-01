import { ICreateAccount } from "@src/models"
import { getInstance } from "./axios"

const BASE_URL = "/account"

const AccountAPI = {
  createAccount: async(account: ICreateAccount) => {
    const instance = getInstance();
    const { data } = await instance.post(BASE_URL, account)
    
    return data
  }
}

export default AccountAPI