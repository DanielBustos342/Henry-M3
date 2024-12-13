import { Request, Response } from "express";
import {
  getAppointmentsService,
  // getAppointmentByIdService,
  // newScheduleService,
} from "../services/appointmentsService";
import { Appointment } from "../entities/Appointment";

// GET /turns => Obtener todos los turnos
export const getAppointments = async (req: Request, res: Response) => {
  const appointments: Appointment[] = await getAppointmentsService();
  res.status(200).json(appointments);
};
// GET /turns/:id => Obtener un turno por ID
// export const getAppointmentById = async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id, 10);
//   const appointment: IAppointment | undefined = await getAppointmentByIdService(
//     id
//   );
//   res.status(200).json(appointment);
// };
// POST /turns/schedule => Crear un nuevo turno
// export const newSchedule = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { date, time, userId, status }: IAppointment = req.body;

//   const newSchedule = await newScheduleService({
//     // id: 0,
//     date: new Date(date),
//     time: new Date(time),
//     userId,
//     status,
//   });
//   res.status(200).json(newSchedule);
// };
//PUT /turns/cancel => Cancelar un turno
// export const cancel = async (req: Request, res: Response) => {
//   res.send("vamos a cancelar un turno");
// };
