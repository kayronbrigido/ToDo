import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import BaseEntity from "./BaseEntity"

@Entity('account')
export class AccountEntity extends BaseEntity{

    @Column()
    public firstName?: string

    @Column()
    public lastName?: string

    @Column()
    public password?: string

}
