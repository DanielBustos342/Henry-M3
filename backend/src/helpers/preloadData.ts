import { AppDataSource } from "../config/data-source";
import { preloadAppointments } from "./appointmentData";
import { preloadUsers } from "./userData";
import { preloadCredentials } from "./credentialData";
import UserRepository from "../repositories/UserRepository";
import AppointmentRepository from "../repositories/AppointmentRepository";
import CredentialRepository from "../repositories/CredentialRepository";

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

  const promises = preloadAppointments.map(async (appointment) => {
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

export const preloadCredentialsData = async () => {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      const credentials = await CredentialRepository.find();

      if (credentials.length)
        return console.log("No se hizo la precarga de datos");

      for await (const credential of preloadCredentials) {
        const newCredential = await CredentialRepository.create(credential);
        await transactionalEntityManager.save(newCredential);
      }
      console.log("Precarga de datos de las credenciales realizada con éxito");
    }
  );
};
