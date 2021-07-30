import { getCustomRepository } from 'typeorm'

import SubjectRepository from '../repositories/SubjectRepository'

interface ISubjectCreateReq {
  code: string
  name: string
  course: string
  period: string
}

class SubjectServices {
  async createSubject({ code, name, course, period } : ISubjectCreateReq) {
    const subjectRepository = getCustomRepository(SubjectRepository)

    const newSubject = subjectRepository.create({
      code,
      name,
      course,
      period
    })

    await subjectRepository.save(newSubject)

    return newSubject
  }

  async showSubjects() {
    const subjectRepository = getCustomRepository(SubjectRepository)
    const subjects = await subjectRepository.find()

    return subjects
  }
}

export default SubjectServices
