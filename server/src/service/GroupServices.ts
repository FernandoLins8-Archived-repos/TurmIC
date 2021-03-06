import { getCustomRepository } from 'typeorm'

import GroupRepository from '../repositories/GroupRepository'

interface IGroupCreateReq {
  semester: string
  whatsapp?: string
  telegram?: string
  classroom?: string
  meet?: string
  site?: string
  code: string
  email: string
}

class GroupServices {
  async createGroup({
    semester,
    whatsapp,
    telegram,
    classroom,
    meet,
    site,
    code,
    email,
  } : IGroupCreateReq) {
    const groupRepository = getCustomRepository(GroupRepository)

    const newGroup = groupRepository.create({
      semester,
      whatsapp,
      telegram,
      classroom,
      meet,
      site,
      subject_code: code,
      instructor_email: email,
    })

    await groupRepository.save(newGroup)

    return newGroup
  }

  async showGroups() {
    const groupRepository = getCustomRepository(GroupRepository)
    
    const groups = await groupRepository.find({
      select: ['id', 'semester'],
      relations: ['instructor', 'schedule', 'subject', 'extra_links'],
    })

    return groups
  }

  async showGroupsByCourse(courseId: string) {
    const groupRepository = getCustomRepository(GroupRepository)

    const groups = await groupRepository.createQueryBuilder('group')
    .leftJoin("group.subject", "subject")
    .leftJoin("group.instructor", "instructor")
    .leftJoin("group.schedule", "schedule")
    .select([
      'subject',
      'instructor.name',
      'group.id', 
      'schedule.week_day',
      'schedule.start',
      'schedule.finish',
    ])
    .where('subject.course = :course', { course: courseId } )
    .getMany();
    
    return groups
  }
}

export default GroupServices
