import CredentialDto from "../dto/CredentialDto";
import CredentialRepository from "../repositories/CredentialRepository";

export const getCredentialsService = async () => {
  const credentials = await CredentialRepository.find({
    relations: {user:true},
  })
  return credentials;
}

export const registerCredentialService = async (credential: CredentialDto) => {
  const newCredential = await CredentialRepository.create(credential);
  await CredentialRepository.save(newCredential);
  return newCredential;
};
