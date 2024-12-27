import { Container, FormControl } from "@mui/material";
import TextAppointment from "../../../components/user/appointment/TextAppointment";
import DateAppointment from "../../../components/user/appointment/DateAppointment";
import TimeAppointment from "../../../components/user/appointment/TimeAppointment";
import BtnAppointment from "../../../components/user/appointment/BtnAppointment";
import axios from "axios";
import { useState } from "react";

function Appointment({ userId }: { userId: number }) {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const handleSubmitAppointment = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      // Validación simple en el frontend
      if (!date || !time) {
        return alert("Por favor selecciona una fecha y hora.");
      }

      // Crear el objeto para el servicio
      const appointment = {
        date,
        time,
        userId,
      };

      // Solicitud al backend
      const response = await axios.post(
        "http://localhost:3000/appointments",
        appointment
      );

      // Mostrar confirmación
      alert("Turno solicitado exitosamente.");
      console.log("Respuesta del backend:", response.data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      alert("Ocurrió un error al solicitar el turno");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ background: "#2E424D", padding: "30px" }}>
      <TextAppointment />
      <Container
        maxWidth="sm"
        sx={{
          background: "#e2e2e2",
          padding: "20px 30px",
          borderRadius: "10px",
        }}
      >
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "center",
            // margin: "20px 0",
          }}
        >
          <form action="" onSubmit={handleSubmitAppointment}>
            <DateAppointment onChange={(value: string) => setDate(value)} />
            <TimeAppointment onChange={(value: string) => setTime(value)} />
            <BtnAppointment />
          </form>
        </FormControl>
      </Container>
    </Container>
  );
}

export default Appointment;
