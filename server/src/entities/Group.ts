import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'

import Instructor from "./Instructor";
import Subject from "./Subject";
import ExtraLink from './ExtraLink';
import Schedule from './Schedule';

@Entity('group')
class Group {
  @PrimaryColumn()
  id: string

  @Column()
  semester: string

  @Column()
  whatsapp: string

  @Column()
  telegram: string

  @Column()
  classroom: string

  @Column()
  meet: string

  @Column()
  site: string

  @Column()
  subject_code: string

  @Column()
  instructor_email: string

  @JoinColumn({ name: 'subject_code' })
  @ManyToOne(type => Subject)
  subject: Subject

  @JoinColumn({ name: 'instructor_email' })
  @ManyToOne(type => Instructor)
  instructor: Instructor

  @JoinColumn()
  @OneToMany(type => ExtraLink, link => link.group)
  extra_links: ExtraLink[]

  @JoinColumn()
  @OneToMany(type => Schedule, link => link.group)
  schedule: Schedule[]

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export default Group
