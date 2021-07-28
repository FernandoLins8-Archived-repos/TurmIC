import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'

import Subject from './Subject';

@Entity('other_links')
class OtherLink{
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  link: string

  @Column()
  subject_id: string

  @JoinColumn({ name: 'subject_id' })
  @ManyToOne(type => Subject)
  subject: Subject

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export default OtherLink
