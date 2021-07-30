import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import InstructorServices from '../service/InstructorServices'

class InstructorController {
  async create(req: Request, res: Response) {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    
    try {
      const { name, email, site } = req.body
      const instructorService = new InstructorServices()

      const instructor = await instructorService.createInstructor({
        name, 
        email, 
        site
      })
      
      return res.json(instructor)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }

  async index(req: Request, res: Response) {
    try {
      const instructorService = new InstructorServices()
      const instructors = await instructorService.showInstructors()

      return res.json(instructors)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
}

export default InstructorController
