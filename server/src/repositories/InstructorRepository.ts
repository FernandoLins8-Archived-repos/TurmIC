import { EntityRepository, Repository } from 'typeorm'

import Instructor from "../entities/Instructor";

@EntityRepository(Instructor)
class InstructorRepository extends Repository<Instructor> { }

export default InstructorRepository
