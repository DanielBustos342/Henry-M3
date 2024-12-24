import "./reset.css";
import { Route, Routes } from "react-router-dom";
import Login from "./view/user/login/Login";
import Register from "./view/user/register/Register";
import Appointment from "./view/user/appointment/Appointment";

function App() {
  return (
    <>
      <Routes>
        {/* user */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* admin */}
        <Route path="/appointment" element={<Appointment />} />
        {/* doctor */}
      </Routes>
    </>
  );
}

export default App;
