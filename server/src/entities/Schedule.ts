import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'

import Group from './Group';

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

export default Schedule
