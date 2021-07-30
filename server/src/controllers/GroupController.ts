import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import GroupServices  from '../service/GroupServices'

class GroupController {
  async create(req: Request, res: Response) {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const { 
        semester,
        whatsapp,
        telegram,
        classroom,
        meet,
        site,
        code,
        email
      } = req.body
      
      const groupService = new GroupServices()

      const group = await groupService.createGroup({
        semester,
        whatsapp,
        telegram,
        classroom,
        meet,
        site,
        code,
        email
      })

      return res.json(group)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }

  async index(req: Request, res: Response) {
    try {
      const groupService = new GroupServices()
      const groups = await groupService.showGroups()

      return res.json(groups)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
}

export default GroupController
