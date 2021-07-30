import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('subject')
class Subject {
  @PrimaryColumn()
  code: string

  @Column()
  name: string

  @Column()
  course: string

  @Column()
  period: string
}

export default Subject
