import { Request, Response } from 'express'

import ExtraLinkServices from '../service/ExtraLinkServices'

class ExtraLinkController {
  async create(req: Request, res: Response) {
    try {
      const { name, link } = req.body
      const subjectId = req.params.id
      const extraLinkServices = new ExtraLinkServices()

      const extraLink = await extraLinkServices.createLink(
        subjectId,
        name,
        link
      )

      return res.json(extraLink)

    } catch(err) {
      console.error(err.message)
      return res.status(500).send('Server Error')
    }
  }
}

export default ExtraLinkController
