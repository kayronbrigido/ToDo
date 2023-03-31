import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export default class BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column({nullable: true})
  createBy?: string;

  @CreateDateColumn({type: 'timestamptz'})
  createAt?: Date;

  @Column({nullable: true})
  updatedBy?: string;

  @UpdateDateColumn({type: 'timestamptz'})
  updatedAt?: Date;

  @Column({nullable: true})
  deletedBy?: string;

  @DeleteDateColumn({type: 'timestamptz'})
  deletedAt?: Date;  
  
} 