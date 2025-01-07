import "./reset.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./view/user/login/Login";
import Register from "./view/user/register/Register";
// import Appointment from "./view/user/appointment/Appointment";
import ListAppointments from "./components/doctor/ListAppointments";
import Profile from "./view/user/profile/Profile";
import Landing from "./view/user/landing/Landing";
import Home from "./view/user/home/Home";
import UserNav from "./components/user/nav/UserNav";
import DetailAppointment from "./view/user/detailAppointment/DetailAppointment";
import DetailProcess from "./view/user/detailProcess/DetailProcess";

// lo primero es mi negrita y mi familia <3
// trabajo muy duro sacando efectivo para pagar la casa
// otro dia sin poder codear, necesito efectivo
// descanso por mucho DIDI
// tomando un feriado primero de enero
// toco semana floja
// no hice nada
// modo flojera mañana empiezo devuelta
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <UserNav />
      )}
      <Routes>
        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* user */}
        <Route path="user/home" element={<Home />} />
        <Route path="user/landing" element={<Landing />} />
        <Route path="/user/profile" element={<Profile />} />
        {/* <Route path="user/appointment" element={<Appointment />} /> */}
        <Route path="user/detail/appointment" element={<DetailAppointment />} />
        <Route path="user/detail/process" element={<DetailProcess />} />
        {/* admin */}
        {/* doctor */}
        <Route path="doctor/nav" />
        <Route path="doctor/drAppointments" element={<ListAppointments />} />
      </Routes>
    </>
  );
}

export default App;
