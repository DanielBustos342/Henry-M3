import { Request, Response } from "express";

// GET /turns => Obtener todos los turnos
export const getAllturns = async (req: Request, res: Response) => {
  res.send("vamos a obtener todos los turnos");
};
// GET /turns/:id => Obtener un turno por ID
export const getTurnById = async (req: Request, res: Response) => {
  res.send("vamos a tener el turno por id");
};
// POST /turns/schedule => Crear un nuevo turno
export const schedule = async (req: Request, res: Response) => {
  res.send("vamos a agendar un turno");
};
//PUT /turns/cancel => Cancelar un turno
export const cancel = async (req: Request, res: Response) => {
  res.send("vamos a cancelar un turno");
};
