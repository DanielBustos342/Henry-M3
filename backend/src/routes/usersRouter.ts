import { Router } from "express";
import {getUsers, getUserById, createUser} from "../controllers/usersController";
// import auth from "../middlewares/auth";

const usersRouter: Router = Router();
// GET /users => Obtener todos los usuarios
usersRouter.get("/", getUsers);
// POST /users => crea un usuario
usersRouter.get("/", createUser)
// GET /users/:id => Obtener un usuario por ID
usersRouter.get("/:id", getUserById);


export default usersRouter;
