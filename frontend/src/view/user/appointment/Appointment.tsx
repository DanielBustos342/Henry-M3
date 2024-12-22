import { Container, FormControl } from "@mui/material";
import TextAppointment from "../../../components/user/appointment/TextAppointment";
import DateAppointment from "../../../components/user/appointment/DateAppointment";
import TimeAppointment from "../../../components/user/appointment/TimeAppointment";
import BtnAppointment from "../../../components/user/appointment/BtnAppointment";

function Appointment() {
  return (
    <Container maxWidth="sm" sx={{ background: "#2E424D", padding: "30px" }}>
      <TextAppointment />
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
            // margin: "20px 0",
          }}
        >
          <DateAppointment />
          <TimeAppointment />
          <BtnAppointment />
        </FormControl>
      </Container>
    </Container>
  );
}

export default Appointment;
