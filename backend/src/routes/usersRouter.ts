import { Router } from "express";
import {getUsers, getUserById, createUser, deleteUser} from "../controllers/usersController";
// import auth from "../middlewares/auth";

const usersRouter: Router = Router();
// GET /users => Obtener todos los usuarios
usersRouter.get("/", getUsers);
// POST /users => crea un usuario
usersRouter.post("/", createUser)
// GET /users/:id => Obtener un usuario por ID
usersRouter.get("/:id", getUserById);
// DELETE /users => Borrar un usuario
usersRouter.delete("/:id", deleteUser)


export default usersRouter;
