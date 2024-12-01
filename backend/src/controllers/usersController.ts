import { Request, Response } from "express";
import {
  createUserService,
  getUsersService,
  deleteUserService,
  getUserByIdService,
} from "../services/usersService";
import IUser from "../interfaces/IUser";

export const createUser = async (req: Request, res: Response) => {
  // vamos a tomar los datos del usuario  del body de la request
  // camos a llamar a la funcion correspondiente del servicio de usuarios
  // para la creacion del nuevo usuario
  // id, name, email, birthdate, address
  const { name, email, active } = req.body;
  const newUser: IUser = await createUserService({ name, email, active });
  res.status(201).json(newUser);
};

export const getUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  console.log("aqui va un id");
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  await deleteUserService(id);
  res.status(200).json({ message: "Eliminado correctamente" });
};
