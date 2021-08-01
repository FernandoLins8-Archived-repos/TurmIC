import { createQueryBuilder, MigrationInterface, QueryRunner } from 'typeorm';

import Subject from '../../entities/Subject'
import { coursesSubjects } from '../seeds/subjects'

export class seedSubject1627526754479 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        coursesSubjects.forEach(subject => {
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
