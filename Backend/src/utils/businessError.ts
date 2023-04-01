import { CustomError } from "ts-custom-error";

export default class BusinessError extends CustomError {
  code: string;
  options: { [key: string]: string | number | boolean};
  isBusinessError = true;

  constructor(code: string, options?: { [key: string]: string | number | boolean}){
    super(code)
    this.code = code;
    this.options = options;
  }
}

export const ErrorCodes = {
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
}