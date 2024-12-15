import { Request, Response } from "express";
import {
  getAppointmentsService,
  getAppointmentByIdService,
  newScheduleService,
} from "../services/appointmentsService";
import { Appointment } from "../entities/Appointment";
import AppointmentDto from "../dto/AppointmentDto";

// GET /turns => Obtener todos los turnos
export const getAppointments = async (req: Request, res: Response) => {
  const appointments: Appointment[] = await getAppointmentsService();
  res.status(200).json(appointments);
};
// GET /turns/:id => Obtener un turno por ID
export const getAppointmentById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const appointment: Appointment | null = await getAppointmentByIdService(id);
  res.status(200).json(appointment);
};

// POST /turns/schedule => Crear un nuevo turno
export const newSchedule = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { date, time, userId }: AppointmentDto = req.body;
  try {
    const newSchedule = await newScheduleService({
      date: new Date(date),
      time,
      userId,
    });
    res.status(200).json(newSchedule);
  } catch (error) {
    res.status(400).json({ error: "Error al solicitar el turno" });
  }
};
//PUT /turns/cancel => Cancelar un turno
// export const cancel = async (req: Request, res: Response) => {
//   res.send("vamos a cancelar un turno");
// };
