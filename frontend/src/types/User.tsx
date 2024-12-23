import Credential from "./Credential";

type User = {
  id: number;
  photo: File | string;
  name: string;
  lastname: string;
  email: string;
  birthdate: Date;
  nDni: number;
  credentialsId: Credential;
};

export default User;

