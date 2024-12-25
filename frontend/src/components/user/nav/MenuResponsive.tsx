import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";

const pages = [
  { label: "Solicitar", path: "user/appointment" },
  { label: "Turnos", path: "user/detail/appointment" },
  { label: "Municipalidad de Tafi Viejo", path: "user/landing" },
];

function MenuResponsive() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.label}
            onClick={handleCloseNavMenu}
            component={Link} // Se usa el componente Link
            to={page.path} // Define la ruta del enlace
          >
            <Typography sx={{ textAlign: "center" }}>{page.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default MenuResponsive;
