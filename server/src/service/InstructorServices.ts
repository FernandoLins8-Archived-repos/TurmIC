import { getCustomRepository } from 'typeorm'

import InstructorRepository from '../repositories/InstructorRepository'

interface IInstructorCreateReq {
  name: string
  email: string
  site: string
}

class InstructorServices {
  async createInstructor({ name, email, site } : IInstructorCreateReq) {
    const instructorRepository = getCustomRepository(InstructorRepository)

    const newInstructor = instructorRepository.create({
      name,
      email,
      site
    })

    await instructorRepository.save(newInstructor)

    return newInstructor
  }

  async showInstructors() {
    const instructorRepository = getCustomRepository(InstructorRepository)
    const instructors = await instructorRepository.find()

    return instructors
  }
}

export default InstructorServices
