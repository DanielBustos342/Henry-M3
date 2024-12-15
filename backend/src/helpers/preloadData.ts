import {
  AppDataSource,
  AppointmentModel,
  UserModel,
} from "../config/data-source";
import { preloadAppointment } from "./appointmentData";
import { preloadUsers } from "./userData";

export const preloadUserData = async () => {
  AppDataSource.manager.transaction(async (transactionalEntityManager) => {
    const users = await UserModel.find();

    if (users.length) return console.log("No se hizo la precarga de datos");

    for await (const user of preloadUsers) {
      const newUser = await UserModel.create(user);
      await transactionalEntityManager.save(newUser);
    }
    console.log("Precarga de datos de usuarios realizada con éxito");
  });
};

export const preloadAppointmentData = async () => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  const promises = preloadAppointment.map(async (appointment) => {
    const newAppointment = await AppointmentModel.create(appointment);
    await queryRunner.manager.save(newAppointment);
    const user = await UserModel.findOneBy({ id: appointment.userId });
    if (!user) throw Error("Usuario inexistente al cargar el turno");
    newAppointment.user = user;
    await queryRunner.manager.save(newAppointment);
  });

  try {
    await Promise.all(promises);
    console.log("Precarga de turnos realizada con exito");
    await queryRunner.commitTransaction();
  } catch (error) {
    console.log("Error al intentar crear el turno");
    await queryRunner.rollbackTransaction();
  } finally {
    console.log("Ha finalizado la precarga");
    await queryRunner.release();
  }
};
