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
                    name: 'group_id',
                    type: 'varchar',
                },
            ],
            foreignKeys: [
                {
                    name: 'ExtraLinkGroupFK',
                    columnNames: ['group_id'],
                    referencedTableName: 'group',
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
