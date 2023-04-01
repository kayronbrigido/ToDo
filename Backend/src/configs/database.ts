import "reflect-metadata"
import { DataSource } from "typeorm"
import * as path from 'path'
import { AccountEntity } from "../entities/AccountEntity"
import { TaskEntity } from "@src/entities/TaskEntity"
import { DATABASE_DATABASE, DATABASE_HOST, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_TYPE, DATABASE_USERNAME } from "./constants"

export const AppDataSource = new DataSource({
    type: DATABASE_TYPE,
    host: DATABASE_HOST, // Your host
    port: DATABASE_PORT,
    username: DATABASE_USERNAME, // Your userna
    password: DATABASE_PASSWORD, // Your password
    database: DATABASE_DATABASE, //Choose you database
    synchronize: true,
    logging: false,
    entities: [AccountEntity, TaskEntity],
    migrations: [`${path.join(__dirname, '/src/migrations/*{.ts,js}')}`],
    subscribers: [],
})

