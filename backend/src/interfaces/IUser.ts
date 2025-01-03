import ICredential from "./ICredential";

interface IUser {
  id: number;
  photo: string;
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  credentialsId: ICredential;
}

export default IUser;
