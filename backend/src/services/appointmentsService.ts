import { AppDataSource } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import UserRepository from "../repositories/UserRepository";
import AppointmentRepository from "../repositories/AppointmentRepository";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await AppointmentRepository.find({
    relations: { user: true },
  });
  return appointments;
};

export const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  const appointment = await AppointmentRepository.findOne({
    where: { id },
    relations: { user: true },
  });
  return appointment;
};

export const newScheduleService = async (
  appointment: AppointmentDto
): Promise<Appointment | void> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  try {
    queryRunner.startTransaction();

    const newSchedule = await AppointmentRepository.create(appointment);
    await queryRunner.manager.save(newSchedule);

    const user = await UserRepository.findOneBy({ id: appointment.userId });

    if (!user) throw Error("Usuario inexistente. No ha podido crear el turno");

    newSchedule.user = user;
    queryRunner.manager.save(newSchedule);

    await queryRunner.commitTransaction();

    return newSchedule;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw Error("Error al solicitar el turno en un usuario inexistente");
  } finally {
    await queryRunner.release();
  }
};

export const cancelAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  try {
    const appointmentIndex = await AppointmentRepository.findOneBy({ id });

    if (!appointmentIndex) {
      console.log(`No se encontro un turno con el ID ${id}`);
      return null;
    }

    appointmentIndex.isCancelled = true;
    await AppointmentRepository.save(appointmentIndex);

    return appointmentIndex;
  } catch (error) {
    console.error("Error en cancelAppointmentById:", error);
    throw new Error("Error interno del servidor");
  }
};

export const deleteAppointmentByIdService = async (
  id: number
): Promise<boolean> => {
  try {
    const result = await AppointmentRepository.delete(id);
    return typeof result.affected === "number" && result.affected > 0;
  } catch (error) {
    console.error("Error en deleteAppointmentById:", error);
    throw new Error("Error interno del servidor");
  }
};
