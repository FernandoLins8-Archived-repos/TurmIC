import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('subject_tag')
class SubjectTag {
  @PrimaryColumn()
  code: string

  @Column()
  name: string

  @Column()
  course: string
}

export default SubjectTag