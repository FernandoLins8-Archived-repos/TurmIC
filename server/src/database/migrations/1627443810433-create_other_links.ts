import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOtherLinks1627443810433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'other_links',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'week_day',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'link',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'subject_id',
                    type: 'varchar',
                    isNullable: false,
                },
            ],
            foreignKeys: [
                {
                    name: 'OtherLinksSubjectFK',
                    columnNames: ['subject_id'],
                    referencedTableName: 'subject',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('other_links')
    }

}
