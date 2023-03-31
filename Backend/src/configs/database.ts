import "reflect-metadata"
import { DataSource } from "typeorm"
import * as path from 'path'
import { AccountEntity } from "../entities/AccountEntity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost", // Your host
    port: 5432,
    username: "postgres", // Your userna
    password: "root", // Your password
    database: "backend", //Choose you database
    synchronize: true,
    logging: false,
    entities: [AccountEntity],
    migrations: [`${path.join(__dirname, '/src/migrations/*{.ts,js}')}`],
    subscribers: [],
})

