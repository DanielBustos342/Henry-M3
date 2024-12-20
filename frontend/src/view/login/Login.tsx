import { Container, FormControl } from "@mui/material";
import Email from "../../components/login/Email";
import Password from "../../components/login/Password";
import TextSingIn from "../../components/login/TextSingIn";
import Btn from "../../components/login/Btn";
import TextContinue from "../../components/login/TextContinue";
import BtnGoogle from "../../components/login/BtnGoogle";

function Login() {
  return (
    <Container
      maxWidth="sm"
      sx={{ background: "#2E424D", padding: "30px", height: "100vh" }}
    >
      <TextSingIn />
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
          <Email />
          <Password />
          <Btn />
          <TextContinue />
          <BtnGoogle />
        </FormControl>
      </Container>
    </Container>
  );
}

export default Login;
