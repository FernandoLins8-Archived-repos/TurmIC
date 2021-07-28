import { getCustomRepository } from 'typeorm'

import SubjectTagRepository from '../repositories/SubjectTagRepository'

interface ISubjectTagCreateReq {
  code: string
  name: string
  course: string
  period: string
}

class SubjectTagServices {
  async createSubjectTag({ code, name, course, period } : ISubjectTagCreateReq) {
    const subjectTagRepository = getCustomRepository(SubjectTagRepository)

    const newSubjectTag = subjectTagRepository.create({
      code,
      name,
      course,
      period
    })

    await subjectTagRepository.save(newSubjectTag)

    return newSubjectTag
  }

  async showSubjectTags() {
    const subjectTagRepository = getCustomRepository(SubjectTagRepository)
    const subjectTags = await subjectTagRepository.find()

    return subjectTags
  }
}

export default SubjectTagServices
