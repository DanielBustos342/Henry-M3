import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import UserResponsive from "./UserResponsive";
import MenuResponsive from "./MenuResponsive";
import Menu from "./Menu";
import Logo from "./Logo";
import LogoResponsive from "./LogoResponsive";

function Nav() {
  return (
    <AppBar position="static" sx={{ marginBottom: "50px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuResponsive />
          <Logo />
          <LogoResponsive />
          <Menu />
          <UserResponsive />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
