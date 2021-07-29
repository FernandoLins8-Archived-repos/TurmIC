import { createQueryBuilder, MigrationInterface, QueryRunner } from 'typeorm';

import SubjectTag from '../../entities/SubjectTag'
import { courseTags } from '../seeds/subject-tags'

export class seedSubjectTags1627526754479 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        courseTags.forEach(tag => {
            createQueryBuilder()
            .insert()
            .into(SubjectTag)
            .values([{ 
                code: tag.code,
                name: tag.name,
                course: tag.course,
                period: String(tag.period)
            }])
            .execute();
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        createQueryBuilder()
        .delete()
        .from(SubjectTag)
        .execute()
    }
}
