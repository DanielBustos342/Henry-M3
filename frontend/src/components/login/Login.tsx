import { Container, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";

function Login() {
  return (
    <Container maxWidth="sm" sx={{ background: "#2E424D", padding: "30px" }}>
      <Typography variant="h3" component="h2" sx={{ textAlign: "center" }}>
        Iniciar session
      </Typography>
      <Container
        maxWidth="sm"
        sx={{ background: "#e2e2e2", padding: "20px 30px" }}
      >
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <TextField id="outlined-helperText" label="Email" />
          <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
          />
        </FormControl>
      </Container>
    </Container>
  );
}

export default Login;
