import { EntityRepository, Repository } from 'typeorm'

import SubjectTag from '../entities/SubjectTag';

@EntityRepository(SubjectTag)
class SubjectTagRepository extends Repository<SubjectTag> { }

export default SubjectTagRepository
