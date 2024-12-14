import { AppointmentModel, UserModel } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await AppointmentModel.find({
    relations: { user: true },
  });
  return appointments;
};

// export const getAppointmentByIdService = async (
//   id: number
// ): Promise<IAppointment | undefined> => {
//   const appointment = appointments.find((appointment) => appointment.id === id);
//   return appointment;
// };

export const newScheduleService = async (
  appointment: AppointmentDto
): Promise<Appointment> => {
  const newSchedule = await AppointmentModel.create(appointment);
  await AppointmentModel.save(newSchedule);

  const user = await UserModel.findOneBy({ id: appointment.userId });

  if (user) {
    newSchedule.user = user;
    AppointmentModel.save(newSchedule);
  }

  return newSchedule;
};
