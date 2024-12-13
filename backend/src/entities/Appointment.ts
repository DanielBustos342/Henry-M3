import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({
    name: "appointments",
})

export class Appointment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string

    @ManyToOne(()=> User, (user)=> user.appoiments)
    user: User
}