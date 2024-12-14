import { UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";

export const getUsersService = async (): Promise<User[]> => {
  const users = await UserModel.find({
    relations: { appointments: true },
  });
  return users;
};

export const getUserByIdService = async (id: number) => {
  const user = await UserModel.findOneBy({ id });
  return user;
};

export const registerService = async (user: UserDto) => {
  const newUser = await UserModel.create(user);
  await UserModel.save(newUser);
  return newUser;
};

// export const loginService = (
//   username: string,
//   password: string
// ): IUser | null => {
//   const loginUser = users.find(
//     (user) =>
//       user.credentialsId.username === username &&
//       user.credentialsId.password === password
//   );
//   return loginUser || null;
// };

// export const deleteUserService = (id: number): IUser => {
//   const userIndex = users.findIndex((user) => user.id === id);
//   const [deleteUser] = users.splice(userIndex, 1);
//   return deleteUser;
// };
