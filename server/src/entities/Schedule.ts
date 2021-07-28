import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'

import Subject from './Subject';

@Entity('schedule')
class Schedule {
  @PrimaryColumn()
  id: string

  @Column()
  week_day: string

  @Column()
  start: string

  @Column()
  finish: string
  
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

export default Schedule
