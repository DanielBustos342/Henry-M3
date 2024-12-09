import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column()
  //   photo: File | string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 60 })
  email: string;

  //   @Column()
  //   birthdate: Date;

  @Column("integer")
  nDni: number;
  //   location: ILocation[]
  //   credentialsId: ICredential
}
