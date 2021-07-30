import { EntityRepository, Repository } from 'typeorm'

import Subject from '../entities/Subject';

@EntityRepository(Subject)
class SubjectRepository extends Repository<Subject> { }

export default SubjectRepository
