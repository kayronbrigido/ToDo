import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ObjectType } from "typeorm"
import BaseEntity from "./BaseEntity"
import { AccountEntity } from "./AccountEntity"

@Entity('task')
export class TaskEntity extends BaseEntity{

    @Column()
    public title?: string

    @Column()
    public description?: string

    @Column()
    public status?: string

    @ManyToOne((): ObjectType<AccountEntity> => AccountEntity, (account) => account.id)
    @JoinColumn({name: 'accountId', referencedColumnName: 'id'})
    public account?: AccountEntity

}
