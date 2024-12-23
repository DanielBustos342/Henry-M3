import { useEffect, useState } from "react";
import axios from "axios";
import { Container, List, Typography, CircularProgress } from "@mui/material";
import UserListItem from "./UserListItem";
import User from "../../../types/User";

function ListUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>("http://localhost:3000/users");
        setUsers(response.data);
      } catch (err) {
        setError("Error fetching users. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", padding: "30px" }}>
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Cargando usuarios...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", padding: "30px" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ background: "#2E424D", padding: "30px" }}>
      <Container
        maxWidth="sm"
        sx={{
          background: "#e2e2e2",
          padding: "20px 30px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Usuarios registrados
        </Typography>
        <List>
          {users.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </List>
      </Container>
    </Container>
  );
}

export default ListUsers;
