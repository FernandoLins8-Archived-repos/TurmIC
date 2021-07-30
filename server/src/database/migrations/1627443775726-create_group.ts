import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createGroup1627443775726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'group',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'semester',
                    type: 'varchar',
                },
                {
                    name: 'whatsapp',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'telegram',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'classroom',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'meet',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'site',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'subject_tag_code',
                    type: 'varchar'
                },
                {
                    name: 'instructor_email',
                    type: 'varchar',
                },
            ],
            foreignKeys: [
                {
                    name: 'GroupSubjectTagFK',
                    columnNames: ['subject_tag_code'],
                    referencedTableName: 'subject_tag',
                    referencedColumnNames: ['code'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'GroupInstructorFK',
                    columnNames: ['instructor_email'],
                    referencedTableName: 'instructor',
                    referencedColumnNames: ['email'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('group')
    }

}
