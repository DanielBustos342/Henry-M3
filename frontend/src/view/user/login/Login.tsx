import { Container, FormControl } from "@mui/material";
import Email from "../../../components/user/login/Email";
import Password from "../../../components/user/login/Password";
import TextSingIn from "../../../components/user/login/TextSingIn";
import Btn from "../../../components/user/login/Btn";
import TextContinue from "../../../components/user/login/TextContinue";
import BtnGoogle from "../../../components/user/login/BtnGoogle";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/user/home");
  };

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
        <form action="" onSubmit={handleSubmitLogin}>
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
        </form>
      </Container>
    </Container>
  );
}

export default Login;
