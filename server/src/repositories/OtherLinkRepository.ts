import { EntityRepository, Repository } from 'typeorm'

import OtherLink from "../entities/OtherLink";

@EntityRepository(OtherLink)
class OtherLinkRepository extends Repository<OtherLink> { }

export default OtherLinkRepository
