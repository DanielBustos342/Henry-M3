import { Router } from "express";
import {
  getAppointmentById,
  newSchedule,
  getAppointments,
  cancelAppointmentById,
  deleteAppointmentById,
} from "../controllers/appointmentsController";
import { validateId } from "../middlewares/validateId";

const appointmentsRouter: Router = Router();

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios
appointmentsRouter.get("/", getAppointments);
// GET /appointments => Obtener el detalle de un turno específico
appointmentsRouter.get("/:id", validateId, getAppointmentById);
// POST /appointments/schedule => Agendar un nuevo turno
appointmentsRouter.post("/", newSchedule);
//PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”
appointmentsRouter.put("/cancel/:id", cancelAppointmentById);
//PUT /appointments/delete => Elimina el turno
appointmentsRouter.put("/delete/:id", deleteAppointmentById);

export default appointmentsRouter;
