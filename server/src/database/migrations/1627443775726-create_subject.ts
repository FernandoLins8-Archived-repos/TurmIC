import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSubject1627443775726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'subject',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'period',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'semester',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'whatsapp',
                    type: 'varchar',
                },
                {
                    name: 'telegram',
                    type: 'varchar',
                },
                {
                    name: 'classroom',
                    type: 'varchar',
                },
                {
                    name: 'meet',
                    type: 'varchar',
                },
                {
                    name: 'site',
                    type: 'varchar',
                },
                {
                    name: 'subject_tag_code',
                    type: 'varchar'
                },
                {
                    name: 'professor_email',
                    type: 'varchar',
                    isNullable: false,
                },
            ],
            foreignKeys: [
                {
                    name: 'SubjectSubjectTagFK',
                    columnNames: ['subject_tag_code'],
                    referencedTableName: 'subject_tag',
                    referencedColumnNames: ['code'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'SubjectProfessorFK',
                    columnNames: ['professor_email'],
                    referencedTableName: 'professor',
                    referencedColumnNames: ['email'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subject')
    }

}
