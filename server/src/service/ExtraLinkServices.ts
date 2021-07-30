import { getCustomRepository } from 'typeorm'

import ExtraLinkRepository from '../repositories/ExtraLinkRepository'

class ExtraLinkServices {
  async createLink(groupId: string, name: string, link: string) {
    const extraLinkRepository = getCustomRepository(ExtraLinkRepository)

    const newLink = extraLinkRepository.create({
      group_id: groupId,
      name,
      link
    })

    await extraLinkRepository.save(newLink)

    return newLink
  }
}

export default ExtraLinkServices
