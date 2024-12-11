import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
7;
import { AppDataSource } from "./config/data-source";

//Lilen Wara Anahi Laguna <3
AppDataSource.initialize().then(() => {
  console.log("Base de datos conectada");
  server.listen(PORT, () => {
    console.log(`Servidor encendido en el ${PORT}`);
  });
});
