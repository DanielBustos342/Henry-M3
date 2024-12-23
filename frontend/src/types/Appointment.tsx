// src/types/Appointment.ts
import User from "./User"; // Asegúrate de importar User si lo necesitas

type Appointment = {
  id: number;
  date: Date;
  time: string;
  isCancelled: boolean;
  user: User; // Relación con el usuario
};

export default Appointment;
