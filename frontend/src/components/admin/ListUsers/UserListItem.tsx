import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import User from "../../../types/User";

interface UserListItemProps {
  user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <ListItem
      sx={{
        backgroundColor: "#f5f5f5",
        marginBottom: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ListItemText
        primary={
          <Typography variant="h6">
            {user.name} {user.lastname}
          </Typography>
        }
        secondary={
          <>
            <Typography variant="body2" color="text.secondary">
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Fecha de nacimiento:</strong>{" "}
              {new Date(user.birthdate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>DNI:</strong> {user.nDni}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default UserListItem;
