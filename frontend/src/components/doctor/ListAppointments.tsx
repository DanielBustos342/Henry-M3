// ListAppointments.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, List, CircularProgress, Typography } from "@mui/material";
import AppointmentItem from "./AppointmentItem";
import Appointment from "../../types/Appointment";

function ListAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get<Appointment[]>(
          "http://localhost:3000/appointments"
        );
        setAppointments(response.data);
      } catch (err) {
        setError("Error fetching appointments. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", padding: "30px" }}>
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Cargando turnos...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", padding: "30px" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

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
          Turnos registrados
        </Typography>
        <List>
          {appointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} />
          ))}
        </List>
      </Container>
    </Container>
  );
}

export default ListAppointments;
