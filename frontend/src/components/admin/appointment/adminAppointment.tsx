import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";

function adminAppointment() {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3 }}>
      {/* Foto del usuario */}
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150" // Reemplaza con la URL de la foto del usuario
        alt="User Photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: John Doe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Name: Doe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: johndoe@example.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Birthdate: 1990-01-01
        </Typography>
        <Typography variant="body2" color="text.secondary">
          DNI: 12345678
        </Typography>
      </CardContent>
      <Stack direction="row" justifyContent="center" sx={{ padding: 2 }}>
        <Button variant="contained" color="primary">
          Habilitar
        </Button>
      </Stack>
    </Card>
  );
}

export default adminAppointment;
