import { Request, Response } from "express";
import { getUsersService, getUserByIdService, createUserService } from "../services/usersService";
import IUser from "../interfaces/IUser";

// controlador para ver los usuarios
export const getUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: "El ID proporcionado no es válido." });
    return
  }
  const user: IUser | undefined = await getUserByIdService(id);

    // Verificar si el usuario existe
    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado." });
      return
    }

    // Devolver el usuario encontrado
    res.status(200).json(user);
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const {id, photo, name, email, birthdate, nDni, location,credentialsId}: IUser = req.body;

  const newUser = await createUserService({
    id,
    photo,
    name,
    email,
    birthdate: new Date(birthdate),
    nDni,
    location,
    credentialsId,

  })
  res.status(200).json(newUser)
}
