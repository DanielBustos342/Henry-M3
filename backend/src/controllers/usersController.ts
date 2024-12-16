import { Request, Response } from "express";
import {
  getUsersService,
  getUserByIdService,
  registerService,
  // deleteUserService,
  loginService,
} from "../services/usersService";
import UserDto from "../dto/UserDto";
import CredentialDto from "../dto/CredentialDto";
import { User } from "../entities/User";

// controlador para ver los usuarios
export const getUsers = async (req: Request, res: Response) => {
  const users: User[] = await getUsersService();
  res.status(200).json(users);
};

// controlador para ver el usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: User | null = await getUserByIdService(parseInt(id));

  // Devolver el usuario encontrado
  res.status(200).json(user);
};

// controlador para crear un usuario
export const register = async (req: Request, res: Response): Promise<void> => {
  const {
    name,
    email,
    birthdate,
    nDni,
  }: UserDto = req.body;

  const newUser = await registerService({
    name,
    email,
    birthdate,
    nDni,
  });
  res.status(200).json(newUser);
};

// controlador para el login
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password }: CredentialDto = req.body;
  if (!username || !password) {
    res.status(400).json({ message: " faltan datos" });
    return;
  }
  const {login, user} = await loginService(username, password);

  if (!login) {
    res.status(400).json({ message: "credenciales incorrectas" });
  }

  res.status(200).json({ message: "inicio de sesion exitoso", user });
};

// controlador para borrar un usuario
// export const deleteUser = (req: Request, res: Response): void => {
//   const id = parseInt(req.params.id, 10);

//   if (isNaN(id)) {
//     res.status(400).json({ message: "el ID proporcionada no es valido" });
//     return;
//   }

//   const deleteUser = deleteUserService(id);

//   if (!deleteUser) {
//     res.status(400).json({ message: "Usuario no encontrado" });
//     return;
//   }

//   res
//     .status(200)
//     .json({ message: "Usuario eliminado exitosamente", deleteUser });
// };
