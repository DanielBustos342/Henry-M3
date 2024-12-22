import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

function Ndni() {
  const [dni, setDni] = React.useState("");

  const formatDni = (value: string) => {
    // Elimina caracteres no numéricos
    const numericValue = value.replace(/\D/g, "").slice(0, 8);
    // Formatea como DNI: ###.###.###
    return numericValue.replace(
      /(\d{1,2})(\d{1,3})?(\d{1,3})?/,
      (_, p1, p2, p3) => {
        let result = p1;
        if (p2) result += `.${p2}`;
        if (p3) result += `.${p3}`;
        return result;
      }
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatDni(event.target.value);
    setDni(formattedValue);
  };
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-dni">DNI</InputLabel>
      <OutlinedInput
        id="outlined-adornment-dni"
        label="DNI"
        value={dni}
        onChange={handleChange} // Actualiza el valor con formato
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} // Solo números
      />
    </FormControl>
  );
}

export default Ndni;
