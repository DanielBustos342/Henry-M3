import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 60 })
  email: string;

  @Column("integer")
  age: number;

  @OneToMany(()=> Appointment,(appointment) => appointment.user)
  appoiments: Appointment[];
}
