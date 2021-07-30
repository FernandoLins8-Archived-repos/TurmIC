import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createExtraLink1627443810433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'extra_link',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'link',
                    type: 'varchar',
                },
                {
                    name: 'subject_id',
                    type: 'varchar',
                },
            ],
            foreignKeys: [
                {
                    name: 'ExtraLinkSubjectFK',
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
        await queryRunner.dropTable('extra_link')
    }

}
