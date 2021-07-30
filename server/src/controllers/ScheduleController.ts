import { Request, Response } from 'express'

import ScheduleServices from '../service/ScheduleServices'

class ScheduleController {
  async create(req: Request, res: Response) {
    try {
      const { day, start, finish } = req.body
      const groupId = req.params.id
      const scheduleService = new ScheduleServices()

      const service = await scheduleService.createSchedule({
        groupId,
        day,
        start,
        finish
      })

      return res.json(service)

    } catch(err) {
      console.error(err.message)
      return res.status(500).send('Server Error')
    }
  }
}

export default ScheduleController
