import { Container, FormControl } from "@mui/material";
import Email from "../../../components/user/login/Email";
import Password from "../../../components/user/login/Password";
import TextSingIn from "../../../components/user/login/TextSingIn";
import Btn from "../../../components/user/login/Btn";
import TextContinue from "../../../components/user/login/TextContinue";
import BtnGoogle from "../../../components/user/login/BtnGoogle";

function Login() {
  return (
    <Container maxWidth="sm" sx={{ background: "#2E424D", padding: "30px" }}>
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
