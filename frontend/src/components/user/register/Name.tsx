import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

function Name() {
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Nombre</InputLabel>
      <OutlinedInput id="outlined-adornment-password" label="Nombre" />
    </FormControl>
  );
}

export default Name;