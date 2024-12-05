import ILocation from "../interfaces/ILocation";
import ICredential from './ICredential';

interface IUser {
  id: number;
  photo: File | string;
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  location: ILocation[];
  credentialsId: ICredential;
}

export default IUser;
