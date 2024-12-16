import { Router } from "express";
import {getUsers, getUserById, register, login} from "../controllers/usersController";
// import auth from "../middlewares/auth";

const usersRouter: Router = Router();
// GET /users => Obtener todos los usuarios
usersRouter.get("/", getUsers);
// POST /users => crea un usuario
usersRouter.post("/register", register)
// POST /users => crea el login
usersRouter.post("/login", login);
// GET /users/:id => Obtener un usuario por ID
usersRouter.get("/:id", getUserById);
// DELETE /users => Borrar un usuario
// usersRouter.delete("/:id", deleteUser);


export default usersRouter;
