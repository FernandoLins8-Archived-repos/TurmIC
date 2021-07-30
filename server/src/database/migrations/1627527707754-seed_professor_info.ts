import { createQueryBuilder, MigrationInterface, QueryRunner } from 'typeorm';

import Instructor from '../../entities/Instructor';
import { instructors } from '../seeds/instructors'

export class seedInstructorInfo1627527707754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        instructors.forEach(instructor => {
            createQueryBuilder()
            .insert()
            .into(Instructor)
            .values([{ 
                name: instructor.name,
                email: instructor.email
            }])
            .execute();
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        createQueryBuilder()
        .delete()
        .from(Instructor)
        .execute()
    }

}
