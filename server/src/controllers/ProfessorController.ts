import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import ProfessorServices from '../service/ProfessorServices'

class ProfessorController {
  async create(req: Request, res: Response) {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    
    try {
      const { name, email, site } = req.body
      const professorService = new ProfessorServices()

      const professor = await professorService.createProfessor({
        name, 
        email, 
        site
      })
      
      return res.json(professor)

    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
}

export default ProfessorController
