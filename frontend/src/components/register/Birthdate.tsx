import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

function Birthdate() {
  const [selectedDate, setSelectedDate] = React.useState("aaaa-mm-dd");
  
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-date">
        Fecha de nacimiento
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-date"
        type="date" // Configura el tipo de entrada como fecha
        value={selectedDate} // Estado que almacena la fecha
        onChange={(e) => setSelectedDate(e.target.value)} // Manejador de cambio
        label="Fecha de nacimiento" // Esto asegura que el label se comporte correctamente
      />
    </FormControl>
  );
}

export default Birthdate;
