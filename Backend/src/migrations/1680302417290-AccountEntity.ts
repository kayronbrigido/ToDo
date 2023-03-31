import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AccountEntity1680302417290 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'account',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4'
                    },
                    {
                        name: 'firstName',
                        type: 'varchar'
                    },
                    {
                        name: 'lastName',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'createBy',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamptz',
                        default: 'now()'
                    },
                    {
                        name: 'updateBy',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamptz',
                        default: 'now()'
                    },
                    {
                        name: 'deleteBy',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'deletedAt',
                        type: 'timestamptz',
                        default: 'now()'
                    }
                ]


            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('account')
    }

}
