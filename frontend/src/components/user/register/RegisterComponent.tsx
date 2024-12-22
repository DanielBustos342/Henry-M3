import { Container, FormControl } from "@mui/material";
import TextRegister from "./TextRegister";
import BtnRegister from "./BtnRegister";
import Name from "./Name";
import LastName from "./LastName";
import Email from "./Email";
import Birthdate from "./Birthdate";
import Ndni from "./Ndni";
import Photo from "./Photo";

function RegisterComponent() {
  return (
    <Container maxWidth="sm" sx={{ background: "#2E424D", padding: "30px" }}>
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
          <Photo />
          <Name />
          <LastName />
          <Email />
          <Birthdate />
          <Ndni />
          <BtnRegister />
        </FormControl>
      </Container>
    </Container>
  );
}

export default RegisterComponent;
