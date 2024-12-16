import { Router } from "express";
import { registerCredential, getCredentials } from "../controllers/credentialsController";

const credentialsRouter: Router = Router();

credentialsRouter.get("/", getCredentials)
credentialsRouter.post("/registerCredential", registerCredential)

export default credentialsRouter;