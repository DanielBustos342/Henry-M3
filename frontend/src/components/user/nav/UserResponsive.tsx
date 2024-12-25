import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

const settings = [
  { label: "Perfil", path: "/user/profile" },
  { label: "Turnos", path: "/user/detail/appointment" },
  { label: "Trámite", path: "/user/detail/process" },
  { label: "Cerrar sesión", path: "/logout" },
];

function UserResponsive() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.label}
            onClick={handleCloseUserMenu}
            component={Link} // Usa el componente Link de react-router-dom
            to={setting.path} // Asocia la ruta correspondiente
          >
            <Typography sx={{ textAlign: "center" }}>
              {setting.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserResponsive;
