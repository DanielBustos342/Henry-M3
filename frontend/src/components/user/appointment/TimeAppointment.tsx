import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface TimeAppointmentProps {
  onChange: (value: string) => void; // Prop para notificar cambios al componente padre
}

function TimeAppointment({ onChange }: TimeAppointmentProps) {
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Generar horas y minutos válidos
  const generateTimeOptions = () => {
    const minutes = [0, 15, 30, 45];
    return Array.from({ length: 5 }, (_, i) => i + 8) // Genera las horas de 8 a 12
      .flatMap((hour) =>
        minutes.map(
          (minute) =>
            `${String(hour).padStart(2, "0")}:${String(minute).padStart(
              2,
              "0"
            )}`
        )
      );
  };

  const timeOptions = generateTimeOptions();

  const handleTimeChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value as string;
    setSelectedTime(selectedValue); // Actualiza el estado local
    onChange(selectedValue); // Notifica al componente padre
  };

  return (
    <FormControl
      sx={{ margin: "10px 0 20px 0", minWidth: 200 }}
      variant="outlined"
      fullWidth
    >
      <InputLabel id="time-picker-label">Selecciona una hora</InputLabel>
      <Select
        labelId="time-picker-label"
        id="time-picker"
        value={selectedTime}
        onChange={handleTimeChange}
        label="Selecciona una hora"
        type="string"
      >
        {timeOptions.map((time) => (
          <MenuItem key={time} value={time}>
            {time}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TimeAppointment;
