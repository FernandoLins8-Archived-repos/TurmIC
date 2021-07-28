import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSubjectTag1627443734528 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'subject_tag',
            columns: [
                {
                    name: 'code',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'course',
                    type: 'varchar',
                },
                {
                    name: 'period',
                    type: 'varchar',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subject_tag')
    }

}
