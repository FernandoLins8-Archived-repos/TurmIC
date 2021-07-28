import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import Subject from "./Subject";

@Entity('professor')
class Professor {
  @Column()
  name: string

  @PrimaryColumn()
  email: string

  @Column()
  site: string

  @JoinColumn()
  @OneToMany(type => Subject, subject => subject.professor)
  subject: Subject[]
}

export default Professor
