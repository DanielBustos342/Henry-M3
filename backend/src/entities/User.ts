import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column()
  birthdate: Date;

  @Column("integer", {unique: true})
  nDni: number;

  @OneToOne(() => Credential, (credential) => credential.user)
  @JoinColumn()
  credential: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];
}
