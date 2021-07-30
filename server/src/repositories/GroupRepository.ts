import { EntityRepository, Repository } from 'typeorm'

import Group from '../entities/Group';

@EntityRepository(Group)
class GroupRepository extends Repository<Group> { }

export default GroupRepository
