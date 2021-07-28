import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSchedule1627443847952 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'schedule',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'week_day',
                    type: 'varchar',
                },
                {
                    name: 'start',
                    type: 'varchar',
                },
                {
                    name: 'finish',
                    type: 'varchar',
                },
                {
                    name: 'subject_id',
                    type: 'varchar',
                },
            ],
            foreignKeys: [
                {
                    name: 'ScheduleSubjectFK',
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
        await queryRunner.dropTable('schedule')
    }

}
