import { getCustomRepository } from 'typeorm'

import SubjectRepository from '../repositories/SubjectRepository'

interface ISubjectCreateReq {
  semester: string
  whatsapp?: string
  telegram?: string
  classroom?: string
  meet?: string
  site?: string
  code: string
  email: string
}

class SubjectServices {
  async createSubject({
    semester,
    whatsapp,
    telegram,
    classroom,
    meet,
    site,
    code,
    email,
  } : ISubjectCreateReq) {
    const subjectRepository = getCustomRepository(SubjectRepository)

    const newSubject = subjectRepository.create({
      semester,
      whatsapp,
      telegram,
      classroom,
      meet,
      site,
      subject_tag_code: code,
      professor_email: email,
    })

    await subjectRepository.save(newSubject)

    return newSubject
  }

  async showSubjects() {
    const subjectRepository = getCustomRepository(SubjectRepository)
    
    const subjects = await subjectRepository.find({
      select: ['id', 'semester'],
      relations: ['professor', 'schedule', 'subject_tag', 'other_links'],
    })

    return subjects
  }
}

export default SubjectServices
