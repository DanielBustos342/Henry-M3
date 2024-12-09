import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
7;
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then(() => {
  console.log("Base de datos conectada");
  server.listen(PORT, () => {
    console.log(`Servidor encendido en el ${PORT}`);
  });
});
