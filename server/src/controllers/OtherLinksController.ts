import { Request, Response } from 'express'

import OtherLinksServices from '../service/OtherLinksServices'

class OtherLinksController {
  async create(req: Request, res: Response) {
    try {
      const { name, link } = req.body
      const subjectId = req.params.id
      const otherLinksServices = new OtherLinksServices()

      const otherLink = await otherLinksServices.createLink(
        subjectId,
        name,
        link
      )

      return res.json(otherLink)

    } catch(err) {
      console.error(err.message)
      return res.status(500).send('Server Error')
    }
  }
}

export default OtherLinksController
