import express from 'express'
import { check } from 'express-validator'

import ProfessorController from './controllers/ProfessorController'

const routes = express.Router()

const professorController = new ProfessorController()

routes.post('/professor', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email is required').not().isEmpty()
], professorController.create)

export default routes
