import express from 'express'
import { check } from 'express-validator'

import ProfessorController from './controllers/ProfessorController'
import SubjectTagController from './controllers/SubjectTagController'

const routes = express.Router()

const professorController = new ProfessorController()
const subjectTagController = new SubjectTagController()

routes.get('/professor', professorController.index)
routes.get('/subject-tag', subjectTagController.index)

routes.post('/professor', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email is required').not().isEmpty(),
], professorController.create)

routes.post('/subject-tag', [
  check('code', 'Code is required').not().isEmpty(),
  check('name', 'Name is required').not().isEmpty(),
  check('course', 'Course is required').not().isEmpty(),
  check('period', 'Period is required').not().isEmpty(),
], subjectTagController.create)


export default routes
