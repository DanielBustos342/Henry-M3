import { Typography } from "@mui/material";

function TextAppointment() {
  return (
    <Typography
      variant="h3"
      component="h2"
      sx={{
        textAlign: "center",
        paddingBottom: "20px",
        fontSize: {
          xs: "1.5rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
        },
      }}
    >
      Solicitar turno para el medico
    </Typography>
  );
}

export default TextAppointment;
