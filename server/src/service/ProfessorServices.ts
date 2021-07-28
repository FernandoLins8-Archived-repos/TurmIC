import { getCustomRepository } from 'typeorm'

import ProfessorRepository from '../repositories/ProfessorRepositories'

interface IProfessorCreateReq {
  name: string
  email: string
  site: string
}

class ProfessorServices {
  async createProfessor({ name, email, site } : IProfessorCreateReq) {
    const professorRepository = getCustomRepository(ProfessorRepository)

    const newProfessor = professorRepository.create({
      name,
      email,
      site
    })

    await professorRepository.save(newProfessor)

    return newProfessor
  }
}

export default ProfessorServices