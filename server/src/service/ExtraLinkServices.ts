import { getCustomRepository } from 'typeorm'

import ExtraLinkRepository from '../repositories/ExtraLinkRepository'

class ExtraLinkServices {
  async createLink(subject: string, name: string, link: string) {
    const extraLinkRepository = getCustomRepository(ExtraLinkRepository)

    const newLink = extraLinkRepository.create({
      subject_id: subject,
      name,
      link
    })

    await extraLinkRepository.save(newLink)

    return newLink
  }
}

export default ExtraLinkServices
