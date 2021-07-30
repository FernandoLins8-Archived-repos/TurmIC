import { EntityRepository, Repository } from 'typeorm'

import ExtraLink from "../entities/ExtraLink";

@EntityRepository(ExtraLink)
class ExtraLinkRepository extends Repository<ExtraLink> { }

export default ExtraLinkRepository
