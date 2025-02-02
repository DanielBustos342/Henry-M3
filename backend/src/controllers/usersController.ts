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
  const { photo, name, lastname, email, password, birthdate, nDni }: UserDto = req.body;

  const newUser = await registerService({
    photo,
    name,
    lastname,
    email,
    password,
    birthdate,
    nDni,
  });
  res.status(200).json(newUser);
};

// controlador para el login
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password }: CredentialDto = req.body;

    if (!username || !password) {
      res.status(400).json({ login: false, message: "Faltan datos" });
      return;
    }
    const { login, user } = await loginService(username, password);

    if (!login) {
      res
        .status(401)
        .json({ login: false, message: "Credenciales incorrectas" });
    } else {
      res.status(200).json({ login: true, user });
    }
  } catch (error) {
    console.error("Error en controlador login:", error);
    res
      .status(500)
      .json({ login: false, message: "Error interno del servidor" });
  }
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
