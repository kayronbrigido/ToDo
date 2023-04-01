import { CustomError } from "ts-custom-error";

export default class UnauthorizedError extends CustomError {
  isUnauthorized = true;
}
