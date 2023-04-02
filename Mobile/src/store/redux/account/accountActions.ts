import { ICreateAccount, ILogin } from "@src/models"
import AccountAPI from "@src/repositories/account"
import { login } from "../auth/authSlice";
import { setAutorizationHeader } from "@src/repositories/axios";


export const handleActionCreateAccount = (
  account: ICreateAccount, 
  callback = (err: Error | null) => {}) => async (dispatch: any) => {

  try {
    await AccountAPI.createAccount(account);

    dispatch(handleActionLogin({username: account.username, password: account.password}))
    
    callback(null)
  } catch (e) {
    callback(e);
  }

}

export const handleActionLogin = (
  loginForm: ILogin,
  callback = (err: Error | null) => {}
  ) => async (dispatch: any) => {

  try {
    const { access_token } = await AccountAPI.login(loginForm);

    setAutorizationHeader(access_token)
    if (access_token) {
      dispatch(login(access_token))
    }
    callback(null)
  } catch (e) {
    callback(e)
    console.error(e)
  }

}