import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const pages = [
  { label: "Solicitar", path: "user/appointment" },
  { label: "Turnos", path: "user/detail/appointment" },
  { label: "Municipalidad de Tafi Viejo", path: "user/landing" },
];

function Menu() {
  const [, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page.label}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link} // Usa el componente Link de react-router-dom
          to={page.path} // Asocia la ruta del enlace
        >
          {page.label}
        </Button>
      ))}
    </Box>
  );
}

export default Menu;
