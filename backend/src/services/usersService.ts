import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto";

let users: IUser[] = [
  { id: 1, name: "John Doe", email: "john@example.com", active: true },
  { id: 2, name: "Jane Doe", email: "jane@example.com", active: false },
];

let id: number = 1;

export const createUserService = async (userData: UserDto): Promise<IUser> => {
  //recibir los datos del usuario
  // crear un nuevo usuario
  // incluir el nuevo usuario dentro del arreglo
  // retornar el objeto creado
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    active: userData.active,
  };
  users.push(newUser);
  id++;
  return newUser;
};

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const getUserByIdService = async (
  id: number
): Promise<IUser | undefined> => {
  const user = users.find((user) => user.id === id);
  return user;
};

export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => {
    return user.id !== id;
  });
};
