import { Typography } from "@mui/material";

function TextRegister() {
  return (
    <Typography
      variant="h3"
      component="h2"
      sx={{
        textAlign: "center",
        paddingBottom: "20px",
        fontSize: {
          xs: "2.5rem",
          sm: "2.5rem",
          md: "3rem",
          lg: "3rem",
        },
      }}
    >
      Registrar
    </Typography>
  );
}

export default TextRegister;
