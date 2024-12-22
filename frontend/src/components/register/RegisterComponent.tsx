import { Container, FormControl } from "@mui/material";
import TextRegister from "./TextRegister";
import BtnRegister from "./BtnRegister";

function RegisterComponent() {
  return (
    <Container
      maxWidth="sm"
      sx={{ background: "#2E424D", padding: "30px", height: "100vh" }}
    >
      <TextRegister />
      <Container
        maxWidth="sm"
        sx={{
          background: "#e2e2e2",
          padding: "20px 30px",
          borderRadius: "10px",
        }}
      >
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <BtnRegister />
        </FormControl>
      </Container>
    </Container>
  );
}

export default RegisterComponent;
