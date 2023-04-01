import { ILogin, IUser } from "@src/models";
import { IAccountService } from "./interfaces/accountService.interface";
import { TYPES } from "@src/models/TYPES";
import { inject, injectable } from "inversify";

import { AccountEntity } from "@src/entities/AccountEntity";
import { IAccountRepository } from "@src/repositories/interfaces/accountInterface";
import { compare, genSalt, hash } from 'bcrypt'
import BusinessError, { ErrorCodes } from "@src/utils/businessError";
import * as jwt from 'jsonwebtoken';
import { JWT_KEY } from "@src/configs/constants";

@injectable()
export class AccountService implements IAccountService {
  private accountRepository: IAccountRepository

  constructor(
    @inject(TYPES.AccountRepository) accountRepository: IAccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  async createAccount(account: AccountEntity) {

    const userExist = await this.accountRepository.getAccountByUsername(account.username);
    if (userExist) {
      throw new BusinessError(ErrorCodes.USER_ALREADY_EXISTS)
    }

    const salt = await genSalt(10)
    const password = await hash(account.password, salt)

    const payload: AccountEntity = {
      ...account,
      password
    }

    return this.accountRepository.create(payload)
  }

  async getAccount(login: ILogin) {

    const user = await this.accountRepository.getAccountByUsername(login.username);

    if (!user) {
      throw new BusinessError(ErrorCodes.INVALID_CREDENTIALS)
    }

    const passIsValid = await compare(login.password, user.password);

    if (!passIsValid) {
      throw new BusinessError(ErrorCodes.INVALID_CREDENTIALS)
    }

    const payload: IUser = {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      userId: user.id
    }

    const token = jwt.sign(payload, JWT_KEY)

    return { access_token: token }
  }

}