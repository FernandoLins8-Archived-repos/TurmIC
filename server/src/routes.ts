import express from 'express'

const routes = express.Router()

routes.post('/professor', (req, res) => {
  return res.json({ 'message': 'testing' })
})

export default routes
