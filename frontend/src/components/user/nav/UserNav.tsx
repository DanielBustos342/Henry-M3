import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import UserResponsive from "./UserResponsive";
import MenuResponsive from "./MenuResponsive";
import Menu from "./Menu";
import Logo from "./Logo";
import LogoResponsive from "./LogoResponsive";
import { Link } from "react-router-dom";

function UserNav() {
  return (
    <AppBar position="static" sx={{ marginBottom: "50px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuResponsive />
          <Link to="/user/home">
            <Logo />
          </Link>
          <Link to="/user/home">
            <LogoResponsive />
          </Link>
          <Menu />
          <UserResponsive />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default UserNav;
