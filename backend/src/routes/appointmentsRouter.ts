import { Router } from "express";
import {
  getAppointmentById,
  schedule,
  cancel,
  getAppointments,
} from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios
appointmentsRouter.get("/", getAppointments);
// GET /appointments => Obtener el detalle de un turno específico
appointmentsRouter.get("/:id", getAppointmentById);
// POST /appointments/schedule => Agendar un nuevo turno
appointmentsRouter.post("/", schedule);
//PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”
appointmentsRouter.put("/", cancel);

export default appointmentsRouter;
