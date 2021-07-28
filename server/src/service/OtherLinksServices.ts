import { getCustomRepository } from 'typeorm'

import OtherLinkRepository from '../repositories/OtherLinkRepository'

class OtherLinksServices {
  async createLink(subject: string, name: string, link: string) {
    const otherLinksRepository = getCustomRepository(OtherLinkRepository)

    const newLink = otherLinksRepository.create({
      subject_id: subject,
      name,
      link
    })

    await otherLinksRepository.save(newLink)

    return newLink
  }
}

export default OtherLinksServices
