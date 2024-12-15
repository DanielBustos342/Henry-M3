import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
7;
import { AppDataSource } from "./config/data-source";
import { preloadAppointmentData, preloadUserData } from "./helpers/preloadData";

// AppDataSource.initialize().then(() => {
//   console.log("Base de datos conectada");
//   preloadData()
//   server.listen(PORT, () => {
//     console.log(`Servidor encendido en el ${PORT}`);
//   });
// });

const initializeApp = async () => {
  await AppDataSource.initialize();
  console.log("Base de datos conectada");
  await preloadUserData();
  console.log("usuarios OK");
  await preloadAppointmentData();
  server.listen(PORT, () => {
    console.log(`Servidor encendido en el ${PORT}`);
  });
};

initializeApp();
