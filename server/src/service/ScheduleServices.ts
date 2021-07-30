import { getCustomRepository } from 'typeorm'

import ScheduleRepository from '../repositories/ScheduleRepository'

interface IScheduleService {
  groupId: string
  day: string
  start: string
  finish: string
}

class ScheduleServices {
  async createSchedule({ groupId, day, start, finish } : IScheduleService) {
    const scheduleRepository = getCustomRepository(ScheduleRepository)

    const newService = scheduleRepository.create({
      group_id: groupId,
      week_day: day,
      start,
      finish
    })

    await scheduleRepository.save(newService)

    return newService
  }
}

export default ScheduleServices

