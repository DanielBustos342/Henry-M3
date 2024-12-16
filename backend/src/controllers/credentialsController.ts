import { Request, Response } from "express";
import { getCredentialsService, registerCredentialService } from "../services/credentialService";
import CredentialDto from "../dto/CredentialDto";

export const getCredentials = async(req: Request, res: Response) => {
    const credentials = await getCredentialsService();
    res.status(200).json(credentials);
}

export const registerCredential = async (req: Request, res: Response) => {
    const {
        username,
        password,
        rol,
        userId,
    }: CredentialDto = req.body;

    const newCredential = await registerCredentialService({
        username,
        password,
        rol,
        userId,
    });
    res.status(200).json(newCredential);
}