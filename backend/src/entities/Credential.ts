import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "Credential",
})

export class Credential{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    rol: string
}