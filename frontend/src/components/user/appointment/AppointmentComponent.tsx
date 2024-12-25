import { Container, FormControl } from "@mui/material";
import TextAppointment from "./TextAppointment";
import Nav from "../nav/UserNav";
import DateAppointment from "./DateAppointment";
import TimeAppointment from "./TimeAppointment";
import BtnAppointment from "./BtnAppointment";

function AppointmentComponent() {
  return (
    <>
      <Nav />
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
    </>
  );
}

export default AppointmentComponent;
