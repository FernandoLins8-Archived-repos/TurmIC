import { EntityRepository, Repository } from 'typeorm'

import Schedule from "../entities/Schedule";

@EntityRepository(Schedule)
class ScheduleRepository extends Repository<Schedule> { }

export default ScheduleRepository
