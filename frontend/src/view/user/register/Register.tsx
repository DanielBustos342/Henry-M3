import { Container, FormControl } from "@mui/material";
import TextRegister from "../../../components/user/register/TextRegister";
import Photo from "../../../components/user/register/Photo";
import Name from "../../../components/user/register/Name";
import LastName from "../../../components/user/register/LastName";
import Email from "../../../components/user/register/Email";
import Birthdate from "../../../components/user/register/Birthdate";
import Ndni from "../../../components/user/register/Ndni";
import BtnRegister from "../../../components/user/register/BtnRegister";
import Password from "../../../components/user/login/Password";

function Register() {
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
          <Password />
          <Birthdate />
          <Ndni />
          <BtnRegister />
        </FormControl>
      </Container>
    </Container>
  );
}

export default Register;
