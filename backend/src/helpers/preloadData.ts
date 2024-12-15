import { AppDataSource } from "../config/data-source";
import { preloadAppointment } from "./appointmentData";
import { preloadUsers } from "./userData";
import UserRepository from "../repositories/UserRepository";
import AppointmentRepository from "../repositories/AppointmentRepository";

export const preloadUserData = async () => {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      const users = await UserRepository.find();

      if (users.length) return console.log("No se hizo la precarga de datos");

      for await (const user of preloadUsers) {
        const newUser = await UserRepository.create(user);
        await transactionalEntityManager.save(newUser);
      }
      console.log("Precarga de datos de usuarios realizada con éxito");
    }
  );
};

export const preloadAppointmentData = async () => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  const promises = preloadAppointment.map(async (appointment) => {
    const newAppointment = await AppointmentRepository.create(appointment);
    await queryRunner.manager.save(newAppointment);
    const user = await UserRepository.findOneBy({ id: appointment.userId });
    if (!user)
      throw Error(
        `Usuario ${appointment.userId} inexistente al cargar el turno`
      );
    newAppointment.user = user;
    queryRunner.manager.save(newAppointment);
  });

  try {
    await queryRunner.startTransaction();
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
