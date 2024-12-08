import { Request, Response } from "express";
import {
  getAppointmentsService,
  getAppointmentByIdService,
} from "../services/appointmentsService";
import IAppointment from "../interfaces/IAppointment";

// GET /turns => Obtener todos los turnos
export const getAppointments = async (req: Request, res: Response) => {
  const appointments: IAppointment[] = await getAppointmentsService();
  console.log(appointments);
  res.status(200).json(appointments);
};
// GET /turns/:id => Obtener un turno por ID
export const getAppointmentById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const appointment: IAppointment | undefined = await getAppointmentByIdService(
    id
  );
  res.status(200).json(appointment);
};
// POST /turns/schedule => Crear un nuevo turno
export const schedule = async (req: Request, res: Response) => {
  res.send("vamos a agendar un turno");
};
//PUT /turns/cancel => Cancelar un turno
export const cancel = async (req: Request, res: Response) => {
  res.send("vamos a cancelar un turno");
};
