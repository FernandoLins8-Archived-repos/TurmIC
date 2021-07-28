import { EntityRepository, Repository } from 'typeorm'

import Professor from "../entities/Professor";

@EntityRepository(Professor)
class ProfessorRepository extends Repository<Professor> { }

export default ProfessorRepository
