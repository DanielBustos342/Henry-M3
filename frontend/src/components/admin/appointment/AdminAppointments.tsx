import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Container,
} from "@mui/material";

// Importa el arreglo de citas
import { myAppointments } from "../../../helpers/myAppointments.tsx";

function AdminAppointments() {
  return (
    <Container maxWidth="sm" sx={{ background: "#2E424D", padding: "30px" }}>
      <Container
        maxWidth="sm"
        sx={{
          background: "#e2e2e2",
          padding: "20px 30px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Carnet de sanidad solicitados
        </Typography>
        <List>
          {myAppointments.map((appointment, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={`Date: ${appointment.date.toLocaleDateString()} - Time: ${
                    appointment.time
                  }`}
                  secondary={`User ID: ${appointment.userId}`}
                />
              </ListItem>
              {index < myAppointments.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Container>
    </Container>
  );
}

export default AdminAppointments;
