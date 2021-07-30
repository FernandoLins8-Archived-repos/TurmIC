import { createQueryBuilder, MigrationInterface, QueryRunner } from 'typeorm';

import Subject from '../../entities/Subject'
import { courseSubjects } from '../seeds/subjects'

export class seedSubject1627526754479 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        courseSubjects.forEach(subject => {
            createQueryBuilder()
            .insert()
            .into(Subject)
            .values([{ 
                code: subject.code,
                name: subject.name,
                course: subject.course,
                period: String(subject.period)
            }])
            .execute();
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        createQueryBuilder()
        .delete()
        .from(Subject)
        .execute()
    }
}
