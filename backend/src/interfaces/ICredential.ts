interface ICredential {
  id: number;
  username: string;
  password: string;
  rol: string;
  createdAt: Date;
  updatedAt: Date;
  isVeridied: boolean;
}

export default ICredential;
