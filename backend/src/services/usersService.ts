import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
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
): Promise<{ login: boolean; user: Omit<User, "credential" | "appointments"> | null }> => {
  console.log("Buscando usuario con username:", username);
  const loginUser = await UserRepository.findOne({
    where: { credential: {username}},
    relations: ["credentials", "appointments"],
  })

  if(!loginUser || !loginUser.credential) return {login: false, user: null};

  const isPasswordValid = await bcrypt.compare(password, loginUser.credential.password)
  console.log("Contraseña válida:", isPasswordValid);

  if(!isPasswordValid) return {login: false, user: null}

  const {id, name, email, birthdate, nDni} = loginUser;
  console.log("Inicio de sesión exitoso para el usuario:", { id, name, email });

  return{
    login: true,
    user: {id, name, email, birthdate,nDni}
  }

};

// export const deleteUserService = (id: number): IUser => {
//   const userIndex = users.findIndex((user) => user.id === id);
//   const [deleteUser] = users.splice(userIndex, 1);
//   return deleteUser;
// };
