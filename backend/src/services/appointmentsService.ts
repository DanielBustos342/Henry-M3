import { AppointmentModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await AppointmentModel.find()
  return appointments;
};

// export const getAppointmentByIdService = async (
//   id: number
// ): Promise<IAppointment | undefined> => {
//   const appointment = appointments.find((appointment) => appointment.id === id);
//   return appointment;
// };

// export const newScheduleService = (
//   schedule: Omit<IAppointment, "id">
// ): IAppointment => {
//   const isDuplicate = appointments.some(
//     (appointment) =>
//       appointment.date.toISOString() === schedule.date.toISOString() &&
//       appointment.time.toISOString() === schedule.time.toISOString() &&
//       appointment.userId.id === schedule.userId.id
//   );

//   if (isDuplicate) throw new Error("El turno ya existe para esa fecha y hora");
//   const newSchedule: IAppointment = {
//     ...schedule,
//     id: appointments.length + 1,
//   };
//   appointments.push(newSchedule);
//   return newSchedule;
// };
