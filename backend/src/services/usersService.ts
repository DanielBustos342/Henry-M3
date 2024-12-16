import { login } from "../controllers/usersController";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import CredentialRepository from "../repositories/CredentialRepository";
import UserRepository from "../repositories/UserRepository";
import bcrypt from "bcrypt";

export const getUsersService = async (): Promise<User[]> => {
  const users = await UserRepository.find({
    relations: { appointments: true },
  });
  return users;
};

export const getUserByIdService = async (id: number) => {
  const user = await UserRepository.findOne({
    where: { id },
    relations: { appointments: true },
  });
  return user;
};

export const registerService = async (user: UserDto) => {
  const newUser = await UserRepository.create(user);
  await UserRepository.save(newUser);
  return newUser;
};

export const loginService = async (
  username: string,
  password: string
): Promise<{
  login: boolean;
  user?: {
    id: number;
    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
  };
}> => {
  try {
    const loginUser = await CredentialRepository.findOne({
      where: { username },
      relations: ["user"],
    });

    if (!loginUser) {
      console.log("Usuario no encontrado");
      return { login: false };
    }
    // Comparar la contraseña sin hash
    const isPasswordValid = password === loginUser.password;
    console.log("Contraseña válida:", isPasswordValid);

    if (!isPasswordValid) {
      return { login: false };
    }

    const { id, name, email, birthdate, nDni } = loginUser.user;

    return {
      login: true,
      user: {
        id,
        name,
        email,
        birthdate,
        nDni,
      },
    };
  } catch (error) {
    console.error("Error en loginService:", error);
    throw new Error("Error interno del servidor");
  }
};

