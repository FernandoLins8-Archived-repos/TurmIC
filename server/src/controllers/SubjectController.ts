import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import SubjectServices from '../service/SubjectServices'

class SubjectController {
  async create(req: Request, res: Response) {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    
    try {
      const { code, name, course, period } = req.body
      const subjectService = new SubjectServices()

      const subject = await subjectService.createSubject({
        code,
        name,
        course,
        period
      })
      
      return res.json(subject)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }

  async index(req: Request, res: Response) {
    try {
      const subjectService = new SubjectServices()
      const subjects = await subjectService.showSubjects()

      return res.json(subjects)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
}

export default SubjectController
