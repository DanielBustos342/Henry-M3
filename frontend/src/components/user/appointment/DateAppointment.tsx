import React, { useState } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

interface DateAppointmentProps {
  onChange: (value: string) => void; // Prop para notificar cambios al componente padre
}

const DateAppointment: React.FC<DateAppointmentProps> = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState<string>("dd-mm-aaaa");

  // Función para manejar el cambio de fecha
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    const selectedDate = new Date(dateValue);

    // Verifica si el día seleccionado es un sábado (6) o domingo (0)
    if (selectedDate.getDay() === 6 || selectedDate.getDay() === 0) {
      alert("Solo puedes seleccionar días de lunes a viernes.");
      return;
    }

    // Verifica que la fecha sea al menos el día siguiente
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (selectedDate >= tomorrow) {
      setSelectedDate(dateValue); // Si la fecha es válida, actualiza el estado
      onChange(dateValue); // Notifica al componente padre
    } else {
      alert("La fecha debe ser desde el día siguiente en adelante.");
    }
  };

  // Fecha mínima para el selector de fechas (día siguiente)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1); // Establecer el día siguiente

  return (
    <FormControl sx={{ margin: "10px 0" }} variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-adornment-date">Fecha del turno</InputLabel>
      <OutlinedInput
        id="outlined-adornment-date"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        label="Fecha del turno"
        inputProps={{
          min: minDate.toISOString().split("T")[0], // Establecer fecha mínima
        }}
      />
    </FormControl>
  );
};

export default DateAppointment;
