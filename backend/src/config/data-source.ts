import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "carnet_sanidad",
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Appointment],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);

export const AppointmentModel = AppDataSource.getRepository(Appointment);
