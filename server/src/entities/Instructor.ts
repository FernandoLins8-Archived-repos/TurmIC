import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import Group from "./Group";

@Entity('instructor')
class Instructor {
  @Column()
  name: string

  @PrimaryColumn()
  email: string

  @Column()
  site: string

  @JoinColumn()
  @OneToMany(type => Group, group => group.instructor)
  group: Group[]
}

export default Instructor
