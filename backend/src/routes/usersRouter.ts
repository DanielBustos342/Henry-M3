import { Router } from "express";
import {
  createUser,
  getUsers,
  deleteUser,
  getUserById,
} from "../controllers/usersController";
import auth from "../middlewares/auth";

const usersRouter: Router = Router();
// GET /users => Obtener todos los usuarios
usersRouter.get("/", auth, getUsers);

//POST /users/register => Crear un nuevo usuario
usersRouter.post("/", createUser);

// GET /users/:id => Obtener un usuario por ID
usersRouter.get("/:id", getUserById);

//DELETE /users => Eliminar un usuario
usersRouter.delete("/", deleteUser);

export default usersRouter;
