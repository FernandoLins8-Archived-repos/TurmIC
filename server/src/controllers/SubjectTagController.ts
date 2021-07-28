import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import SubjectTagServices from '../service/SubjectTagServices'

class SubjectTagController {
  async create(req: Request, res: Response) {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    
    try {
      const { code, name, course, period } = req.body
      const subjectTagService = new SubjectTagServices()

      const subjectTag = await subjectTagService.createSubjectTag({
        code,
        name,
        course,
        period
      })
      
      return res.json(subjectTag)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }

  async index(req: Request, res: Response) {
    try {
      const subjectTagService = new SubjectTagServices()
      const subjectTags = await subjectTagService.showSubjectTags()

      return res.json(subjectTags)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
}

export default SubjectTagController
