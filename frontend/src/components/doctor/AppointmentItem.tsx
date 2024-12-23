// AppointmentItem.tsx
import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import Appointment from "../../types/Appointment";

interface AppointmentItemProps {
  appointment: Appointment;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ appointment }) => {
  return (
    <ListItem
      key={appointment.id}
      sx={{
        backgroundColor: "#f5f5f5",
        marginBottom: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ListItemText
        primary={`Turno de ${appointment.user.name} ${appointment.user.lastname}`}
        secondary={
          <>
            <Typography variant="body2" color="text.secondary">
              <strong>Fecha:</strong>{" "}
              {new Date(appointment.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Hora:</strong> {appointment.time}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Estado:</strong>{" "}
              {appointment.isCancelled ? "Cancelado" : "Confirmado"}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default AppointmentItem;
