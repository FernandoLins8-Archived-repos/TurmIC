import express from 'express'
import { check } from 'express-validator'

import InstructorController from './controllers/InstructorController'
import SubjectTagController from './controllers/SubjectTagController'
import SubjectController from './controllers/SubjectController'
import ExtraLinkController from './controllers/ExtraLinkController'
import ScheduleController from './controllers/ScheduleController'

const routes = express.Router()

const instructorController = new InstructorController()
const subjectTagController = new SubjectTagController()
const subjectController = new SubjectController()
const extraLinkController = new ExtraLinkController()
const scheduleController = new ScheduleController()

routes.get('/instructor', instructorController.index)
routes.get('/subject-tag', subjectTagController.index)
routes.get('/subject', subjectController.index)

routes.post('/instructor', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email is required').not().isEmpty(),
], instructorController.create)

routes.post('/subject-tag', [
  check('code', 'Code is required').not().isEmpty(),
  check('name', 'Name is required').not().isEmpty(),
  check('course', 'Course is required').not().isEmpty(),
  check('period', 'Period is required').not().isEmpty(),
], subjectTagController.create)

routes.post('/subject', [
  check('semester', 'Semester is required').not().isEmpty(),
  check('code', 'Subject Code is required').not().isEmpty(),
  check('email', 'Instructor email is required').not().isEmpty(),
], subjectController.create)

routes.post('/subject/:id/extra-link', [
  check('name', 'Link name is required').not().isEmpty(),
  check('link', 'Link is required').not().isEmpty(),
], extraLinkController.create)

routes.post('/subject/:id/schedule', [
  check('day', 'Day is required').not().isEmpty(),
  check('start', 'Starting hour is required').not().isEmpty(),
  check('end', 'Ending hour is required').not().isEmpty(),
], scheduleController.create)

export default routes
