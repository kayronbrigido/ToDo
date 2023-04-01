import { ICreateAccount } from "@src/models"
import AccountAPI from "@src/repositories/account"

export const handleActionCreateAccount = (account: ICreateAccount) => async (dispatch: any) => {

  try {
    await AccountAPI.createAccount(account);
  } catch(e) {
    console.log(e)
  }
  
}