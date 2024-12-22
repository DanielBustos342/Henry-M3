import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";

function Photo() {
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result as string); // Guardar la imagen como base64
      };
      reader.readAsDataURL(file); // Leer la imagen como base64
    }
  };
  return (
    <Box
      sx={{ position: "relative", width: 150, height: 150, margin: "0 auto" }}
    >
      {/* Vista previa de la imagen */}
      {photo ? (
        <Avatar
          alt="Foto seleccionada"
          src={photo}
          sx={{ width: 150, height: 150 }}
        />
      ) : (
        <Avatar alt="Placeholder" sx={{ width: 150, height: 150 }}>
          <PersonIcon sx={{ fontSize: 80 }} />
        </Avatar>
      )}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          display: "flex",
          gap: 1,
        }}
      >
        {!photo ? (
          <Fab color="primary" aria-label="add" component="label">
            <AddIcon />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handlePhotoChange}
            />
          </Fab>
        ) : (
          <Fab color="error" aria-label="edit" onClick={() => setPhoto(null)}>
            <DeleteIcon />
          </Fab>
        )}
      </Box>
    </Box>
  );
}

export default Photo;
