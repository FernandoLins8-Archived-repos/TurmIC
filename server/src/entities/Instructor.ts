import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import Subject from "./Subject";

@Entity('instructor')
class Instructor {
  @Column()
  name: string

  @PrimaryColumn()
  email: string

  @Column()
  site: string

  @JoinColumn()
  @OneToMany(type => Subject, subject => subject.instructor)
  subject: Subject[]
}

export default Instructor
