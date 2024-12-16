import { Request, Response } from "express";
import {
  getAppointmentsService,
  getAppointmentByIdService,
  newScheduleService,
  cancelAppointmentByIdService,
  deleteAppointmentByIdService,
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
export const cancelAppointmentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json("ID de turno no proporcionado");
      return;
    }

    const appointment = await cancelAppointmentByIdService(Number(id));

    if (!appointment) {
      res.status(404).json("Turno no encontrado");
      return;
    }
    res
      .status(200)
      .json({ mensaje: "Turno cancelado exitosamente", appointment });
  } catch (error) {
    console.error("Error en controlador cancelAppointment:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteAppointmentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "ID de turno no proporcionado" });
      return;
    }

    const wasDeleted = await deleteAppointmentByIdService(Number(id));

    if (!wasDeleted) {
      res.status(404).json({ message: "Turno no encontrado" });
      return;
    }

    res.status(200).json({ message: "Turno eliminado exitosamente" });
  } catch (error) {
    console.error("Error en controlador deleteAppointment:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
