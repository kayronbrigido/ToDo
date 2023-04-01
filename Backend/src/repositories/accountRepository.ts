import { injectable } from 'inversify'

import { AppDataSource } from '@src/configs/database';
import { AccountEntity } from '../entities/AccountEntity';
import { IAccountRepository } from './interfaces/accountInterface';
import { Repository } from 'typeorm';

@injectable()
export class AccountRepository implements IAccountRepository {
  private accountRepository: Repository<AccountEntity> = AppDataSource.getRepository(AccountEntity)

  async create(account: AccountEntity): Promise<AccountEntity> {
    return await this.accountRepository.save(account)

  }

  async getAccountByUsername(username: string): Promise<AccountEntity> {
    return await this.accountRepository.findOneBy({ username })
  }
}