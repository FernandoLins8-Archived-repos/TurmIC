import { createQueryBuilder, MigrationInterface, QueryRunner } from 'typeorm';

import Professor from '../../entities/Professor'
import { professors } from '../seeds/professors'

export class seedProfessorInfo1627527707754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        professors.forEach(professor => {
            createQueryBuilder()
            .insert()
            .into(Professor)
            .values([{ 
                name: professor.name,
                email: professor.email
            }])
            .execute();
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        createQueryBuilder()
        .delete()
        .from(Professor)
        .execute()
    }

}
