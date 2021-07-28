import { getCustomRepository } from 'typeorm'

import ScheduleRepository from '../repositories/ScheduleRepository'

interface IScheduleService {
  subjectId: string
  day: string
  start: string
  finish: string
}

class ScheduleServices {
  async createSchedule({ subjectId, day, start, finish } : IScheduleService) {
    const scheduleRepository = getCustomRepository(ScheduleRepository)

    const newService = scheduleRepository.create({
      subject_id: subjectId,
      week_day: day,
      start,
      finish
    })

    await scheduleRepository.save(newService)

    return newService
  }
}

export default ScheduleServices

