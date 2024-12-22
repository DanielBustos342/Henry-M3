import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

function TimeAppointment() {
  const [selectedTime, setSelectedTime] = useState<string>("");
  // Generar horas y minutos válidos
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour <= 12; hour++) {
      for (let minute of [0, 15, 30, 45]) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const handleTimeChange = (event: SelectChangeEvent<string>) => {
    setSelectedTime(event.target.value as string);
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
