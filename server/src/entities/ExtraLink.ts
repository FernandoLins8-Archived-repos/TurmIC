import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'

import Group from './Group';

@Entity('extra_link')
class ExtraLink{
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  link: string

  @Column()
  group_id: string

  @JoinColumn({ name: 'group_id' })
  @ManyToOne(type => Group)
  group: Group

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export default ExtraLink
