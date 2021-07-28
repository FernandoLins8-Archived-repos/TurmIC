import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('professor')
class Professor {
  @Column()
  name: string

  @PrimaryColumn()
  email: string

  @Column()
  site: string
}

export default Professor
