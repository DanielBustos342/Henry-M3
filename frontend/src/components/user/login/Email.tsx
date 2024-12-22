import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

function Email() {
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
      <OutlinedInput id="outlined-adornment-password" label="Email" />
    </FormControl>
  );
}

export default Email;
