import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ObjectType } from "typeorm"
import BaseEntity from "./BaseEntity"
import { TaskEntity } from "./TaskEntity"

@Entity('account')
export class AccountEntity extends BaseEntity{

    @Column({unique: true})
    public username?: string

    @Column()
    public firstName?: string

    @Column()
    public lastName?: string

    @Column()
    public password?: string

    @OneToMany((): ObjectType<TaskEntity> => TaskEntity, (task: TaskEntity) => task.id)
    public task?: TaskEntity[]
}


