import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

function LastName() {
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Apellido</InputLabel>
      <OutlinedInput id="outlined-adornment-password" label="Apellido" />
    </FormControl>
  );
}

export default LastName;
