import CredentialDto from "../dto/CredentialDto";
import CredentialRepository from "../repositories/CredentialRepository";

export const registerCredential = async (credential: CredentialDto) => {
  const newCredential = await CredentialRepository.create(credential);
  await CredentialRepository.save(newCredential);
  return newCredential;
};
